import Link from 'next/link';

export function Header() {
  return (
    <header>
      <div className="h-11 flex items-center bg-secondary">
        <span className="text-primary px-28">
          Единый колл-центр: &nbsp;
          <Link className="font-bold" href="tel:+993 12 12-12-12">
            +993 12 12-12-12
          </Link>
        </span>
      </div>
    </header>
  );
}
