import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const showPages = pages.filter(page => {
    if (totalPages <= 7) return true;
    if (page === 1 || page === totalPages) return true;
    if (page >= currentPage - 1 && page <= currentPage + 1) return true;
    return false;
  });

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      {currentPage > 1 && (
        <Button asChild variant="outline" size="sm">
          <Link href={`${basePath}/page/${currentPage - 1}`}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Link>
        </Button>
      )}

      <div className="flex items-center space-x-1">
        {showPages.map((page, index) => {
          const prevPage = showPages[index - 1];
          const showEllipsis = prevPage && page - prevPage > 1;

          return (
            <div key={page} className="flex items-center space-x-1">
              {showEllipsis && (
                <span className="px-2 py-1 text-muted-foreground">...</span>
              )}
              <Button
                asChild
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                className="w-8 h-8 p-0"
              >
                <Link href={page === 1 ? basePath : `${basePath}/page/${page}`}>
                  {page}
                </Link>
              </Button>
            </div>
          );
        })}
      </div>

      {currentPage < totalPages && (
        <Button asChild variant="outline" size="sm">
          <Link href={`${basePath}/page/${currentPage + 1}`}>
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      )}
    </div>
  );
}