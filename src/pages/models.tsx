import { useState } from 'react';
import { getModelsPageData } from '@/api/getModelsPageData';
import { ButtonGroup } from '@/shared/ui';
import { FrameModel, ModelWithEquipment } from '@/types/modelsPage';
import { ModelsFilter } from '@/widgets/models/models-filter/ModelsFilter';
import { ModelsHero } from '@/widgets/models/models-hero/ModelsHero';
import { ModelsList } from '@/widgets/models/models-list/ModelsList';
import { ModelsModal } from '@/widgets/models/models-modal/ModelsModal';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { Spinner } from '@material-tailwind/react';
import { Loading } from '@/layout/Loading';

export default function Models() {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedModel, setSelectedModel] = useState<ModelWithEquipment>();
  const [selectedFrame, setSelectedFrame] = useState<FrameModel>();
  const toggleFilter = () => setShowFilter((prev) => !prev);
  const { t } = useTranslation('common');
  const [open, setOpen] = useState(false);
  const [selectedFrameIds, setSelectedFrameIds] = useState<number[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const handleOpen = (model: ModelWithEquipment, frame: FrameModel) => {
    setSelectedModel(model);
    setSelectedFrame(frame);
    setOpen(true);
  };

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['modelsPage', { selectedFrameIds }],
    queryFn: () =>
      getModelsPageData({
        options: [...selectedFrameIds, ...selectedOptions]?.length
          ? [...selectedFrameIds, ...selectedOptions].join()
          : undefined,
      }),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;
  const set = new Set<number>();
  data?.frameModels?.map((frame) => {
    set.add(frame.id);
  });

  const handleFrameClick = (frame: any) => {
    setSelectedFrame(frame);
    setSelectedFrameIds((previous) => {
      if (!frame.id) {
        previous.forEach((a) => {
          if (set.has(a)) {
            const index = previous.indexOf(a);
            previous.splice(index, 1);
          }
        });
        return previous;
      }
      const frameExists = previous.find((a) => set.has(a));
      if (frameExists) {
        const existingIndex = previous.indexOf(frameExists);
        previous[existingIndex] = frame.id;
      } else {
        previous.push(frame.id);
      }

      return previous;
    });
    refetch();
  };

  const handleOptionClick = (option: { id: number }) => {
    selectedOptions.includes(option.id)
      ? setSelectedOptions(selectedOptions.filter((i) => i !== option.id))
      : setSelectedOptions([...selectedOptions, option.id]);
  };

  const handleRemoveFilter = () => {
    setSelectedOptions([]);
    refetch();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ModelsHero t={t} toggleFilter={toggleFilter} showFilter={showFilter} />
      {showFilter && (
        <ModelsFilter
          data={data.options}
          t={t}
          handleOptionClick={handleOptionClick}
          refetch={refetch}
          onRemoveFilter={handleRemoveFilter}
        />
      )}
      <ButtonGroup
        buttons={[
          {
            text: t('all'),
            onClick: () => handleFrameClick({ name: t('all') }),
          },
          ...data.frameModels.map((frame) => ({
            text: frame.name,
            onClick: () => handleFrameClick(frame),
          })),
        ]}
      />
      <div className="mt-16">
        <ModelsList data={data.frameModels} handleOpen={handleOpen} />
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
