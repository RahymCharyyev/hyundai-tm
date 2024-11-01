import { getModelsPageData } from '@/api/getModelsPageData';
import { Loading } from '@/components/layout/Loading';
import { ModelsFilter } from '@/components/models/ModelsFilter';
import { ModelsHero } from '@/components/models/ModelsHero';
import { ModelsList } from '@/components/models/ModelsList';
import { ModelsModal } from '@/components/models/ModelsModal';
import { useQueryParams } from '@/hooks/useQueryParams';
import { FrameModel, ModelWithEquipment } from '@/types/modelsPage';
import { Button, ButtonGroup } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { KeyboardEvent, useMemo, useState } from 'react';

export default function Models() {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedModel, setSelectedModel] = useState<ModelWithEquipment>();
  const [selectedFrame, setSelectedFrame] = useState<FrameModel>();
  const toggleFilter = () => setShowFilter((prev) => !prev);
  const { t } = useTranslation('common');
  const [open, setOpen] = useState(false);
  const [selectedFrameIds] = useState<number[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const { query, changeParams } = useQueryParams();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const currentLang = router.locale;

  const { isPending, error, data } = useQuery({
    queryKey: [
      'modelsPage',
      selectedFrameIds,
      query.options,
      query.search,
      query.boardMin,
      query.boardMax,
    ],
    queryFn: () =>
      getModelsPageData({
        boardMin: query.boardMin as any,
        boardMax: query.boardMax as any,
        fuelMin: query.fuelMin as any,
        fuelMax: query.fuelMax as any,
        priceMin: query.priceMin as any,
        priceMax: query.priceMax as any,
        options: query.options as any,
        search: query.search as string,
        lang: currentLang,
      }),
  });

  const frameDefaultIds = useMemo(() => {
    return data?.frameModels.map((frame: any) => frame.id);
  }, [data]);
  const isFrameInOptions = useMemo(() => {
    if (query.options && typeof query.options === 'string') {
      const optionsArr = query.options.split(',');
      return optionsArr.reduce((result: any, optionId) => {
        const filtered: any = frameDefaultIds?.filter(
          (frameId: any) => String(frameId) === optionId
        );
        if (filtered?.length > 0) result.push(filtered[0]);

        return result;
      }, []);
    }
    return [];
  }, [query.options, frameDefaultIds]);

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  const handleOpenModal = (model: ModelWithEquipment, frame: FrameModel) => {
    setSelectedModel(model);
    setSelectedFrame(frame);
    setOpen(true);
  };

  const handleFrameClick = (frame: FrameModel | 'all') => {
    if (frame !== 'all') {
      const frameId = String(frame.id);
      if (query.options && typeof query.options === 'string') {
        const optionsArr = query.options.split(',');
        if (isFrameInOptions.length !== 0) {
          const selectedFrameId = String(isFrameInOptions[0]);
          const filteredOptions = optionsArr.filter(
            (option) => option !== selectedFrameId
          );
          if (frame === undefined)
            changeParams({ options: filteredOptions.join() });
          else changeParams({ options: [...filteredOptions, frameId].join() });
        } else changeParams({ options: [...optionsArr, frameId].join() });
      } else changeParams({ options: frameId });
    } else {
      if (query.options && typeof query.options === 'string') {
        const optionsArr = query.options.split(',');
        if (isFrameInOptions.length !== 0) {
          const selectedFrameId = String(isFrameInOptions[0]);
          const filteredOptions = optionsArr.filter(
            (option) => option !== selectedFrameId
          );
          changeParams({ options: filteredOptions.join() });
        }
      }
    }
  };

  const handleOptionClick = (option: { id: number }) => {
    selectedOptions.includes(option.id)
      ? setSelectedOptions(selectedOptions.filter((i) => i !== option.id))
      : setSelectedOptions([...selectedOptions, option.id]);
  };

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };
  const handleSearchKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      changeParams({ search: searchQuery });
    }
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <ModelsHero
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        handleSearchKeyPress={handleSearchKeyPress}
        t={t}
        toggleFilter={toggleFilter}
        showFilter={showFilter}
      />
      {showFilter && (
        <ModelsFilter
          data={data}
          t={t}
          handleOptionClick={handleOptionClick}
          selectedOptions={selectedOptions}
        />
      )}
      <ButtonGroup>
        <Button
          className={
            isFrameInOptions.length === 0
              ? 'rounded-none bg-primary border-none lg:px-2 lg:!py-2 lg:text-sm md:!text-xs'
              : 'rounded-none bg-thirdColor border-none lg:px-2 lg:!py-2 lg:text-sm md:!text-xs'
          }
          onClick={() => handleFrameClick('all')}
        >
          {t('all')}
        </Button>
        {data?.frameModels.map((frame: any) => (
          <Button
            className={
              isFrameInOptions.includes(frame.id)
                ? 'rounded-none bg-primary border-none lg:px-2 lg:!py-2 lg:text-sm md:!text-xs'
                : 'rounded-none bg-thirdColor border-none lg:px-2 lg:!py-2 lg:text-sm md:!text-xs'
            }
            key={`frame-${frame.id}`}
            onClick={() => handleFrameClick(frame)}
          >
            {frame.name}
          </Button>
        ))}
      </ButtonGroup>
      <div className='mt-16'>
        <ModelsList data={data.frameModels} handleOpen={handleOpenModal} />
      </div>
      {selectedModel && (
        <ModelsModal
          t={t}
          open={open}
          handleOpen={() => setOpen(false)}
          model={selectedModel}
          frameModel={selectedFrame}
        />
      )}
    </main>
  );
}
