import {
  Breadcrumb as SBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb'

export function Breadcrumb() {
  return (
    <nav className="flex h-12 items-center px-4">
      <SBreadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Patient List</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Patient Detail</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </SBreadcrumb>
    </nav>
  )
}
