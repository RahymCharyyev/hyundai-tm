import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { Button, ButtonGroup } from '@material-tailwind/react';
import { getModelsPageData } from '@/api/getModelsPageData';
import { FrameModel, ModelWithEquipment } from '@/types/modelsPage';
import { Loading } from '@/layout/Loading';
import { useQueryParams } from '@/shared/hooks/useQueryParams';
import { ModelsFilter } from '@/widgets/models/models-filter/ModelsFilter';
import { ModelsHero } from '@/widgets/models/models-hero/ModelsHero';
import { ModelsList } from '@/widgets/models/models-list/ModelsList';
import { ModelsModal } from '@/widgets/models/models-modal/ModelsModal';

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

  const { isPending, error, data } = useQuery({
    queryKey: ['modelsPage', selectedFrameIds, query.options],
    queryFn: () =>
      getModelsPageData({
        options: query.options as any,
      }),
  });

  const frameDefaultIds = useMemo(() => {
    return data?.frameModels.map((frame) => frame.id);
  }, [data]);
  const isFrameInOptions = useMemo(() => {
    if (query.options && typeof query.options === 'string') {
      const optionsArr = query.options.split(',');
      return optionsArr.reduce((result: any, optionId) => {
        const filtered: any = frameDefaultIds?.filter(
          (frameId) => String(frameId) === optionId,
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
            (option) => option !== selectedFrameId,
          );
          if (frame === undefined) changeParams({ options: filteredOptions.join() });
          else changeParams({ options: [...filteredOptions, frameId].join() });
        } else changeParams({ options: [...optionsArr, frameId].join() });
      } else changeParams({ options: frameId });
    } else {
      if (query.options && typeof query.options === 'string') {
        const optionsArr = query.options.split(',');
        if (isFrameInOptions.length !== 0) {
          const selectedFrameId = String(isFrameInOptions[0]);
          const filteredOptions = optionsArr.filter(
            (option) => option !== selectedFrameId,
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ModelsHero t={t} toggleFilter={toggleFilter} showFilter={showFilter} />
      {showFilter && (
        <ModelsFilter
          data={data.options}
          t={t}
          handleOptionClick={handleOptionClick}
          selectedOptions={selectedOptions}
        />
      )}
      <ButtonGroup>
        <Button
          className={
            isFrameInOptions.length === 0
              ? 'rounded-none bg-primary border-none'
              : 'rounded-none bg-thirdColor border-none'
          }
          onClick={() => handleFrameClick('all')}
        >
          {t('all')}
        </Button>
        {data?.frameModels.map((frame) => (
          <Button
            className={
              isFrameInOptions.includes(frame.id)
                ? 'rounded-none bg-primary border-none'
                : 'rounded-none bg-thirdColor border-none'
            }
            key={`frame-${frame.id}`}
            onClick={() => handleFrameClick(frame)}
          >
            {frame.name}
          </Button>
        ))}
      </ButtonGroup>
      <div className="mt-16">
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
