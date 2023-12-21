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

export default function Models() {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedModel, setSelectedModel] = useState<ModelWithEquipment>();
  const [selectedFrame, setSelectedFrame] = useState<FrameModel>();
  const toggleFilter = () => setShowFilter((prev) => !prev);
  const { t } = useTranslation('common');
  const [open, setOpen] = useState(false);
  const [frameId, setFrameId] = useState<number | null>(null);

  const handleOpen = (model: ModelWithEquipment, frame: FrameModel) => {
    setSelectedModel(model);
    setSelectedFrame(frame);
    setOpen(true);
  };

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['modelsPage', { frameId }],
    queryFn: () =>
      getModelsPageData({ frameId, options: frameId ? frameId.toString() : '30,31' }),
  });

  if (isPending) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  const handleButtonClick = (frame: any) => {
    setSelectedFrame(frame);
    setFrameId(frame.id);
    refetch();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ModelsHero t={t} toggleFilter={toggleFilter} showFilter={showFilter} />
      {showFilter && <ModelsFilter data={data.options} t={t} />}
      <ButtonGroup
        buttons={[
          {
            text: t('all'),
            onClick: () => handleButtonClick({ id: 0, name: t('all') }),
          },
          ...data.frameModels.map((frame) => ({
            text: frame.name,
            onClick: () => handleButtonClick(frame),
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
