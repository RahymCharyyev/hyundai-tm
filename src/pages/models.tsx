import { getModelsPageData } from '@/api/getModelsPageData';
import { ButtonGroup } from '@/shared/ui';
import { ModelsFilter } from '@/widgets/models/models-filter/ModelsFilter';
import { ModelsHero } from '@/widgets/models/models-hero/ModelsHero';
import { ModelsModal } from '@/widgets/models/models-modal/ModelsModal';
import { Button } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';

export default function Models() {
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => setShowFilter((prev) => !prev);
  const { t } = useTranslation('common');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const { isPending, error, data } = useQuery({
    queryKey: ['modelsPage'],
    queryFn: () => getModelsPageData(),
  });

  if (isPending) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ModelsHero t={t} toggleFilter={toggleFilter} showFilter={showFilter} />
      {showFilter && <ModelsFilter data={data} t={t} />}
      <ButtonGroup
        buttons={[
          { text: 'Все (11)' },
          { text: 'Седаны (5)' },
          { text: 'Кроссоверы (4)' },
          { text: 'Коммерческие (1)' },
        ]}
      />
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <ModelsModal t={t} open={open} handleOpen={handleOpen} />
    </main>
  );
}
