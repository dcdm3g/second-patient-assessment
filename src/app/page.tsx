import { Header } from '~/app/_components/header'
import { Breadcrumb } from '~/app/_components/breadcrumb'
import { PatientDetail } from '~/app/_components/patient-detail'
import { AppSidebar } from '~/components/app-sidebar'
import { Separator } from '~/components/ui/separator'
import { SidebarInset, SidebarProvider } from '~/components/ui/sidebar'

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <Header />
        <Separator />

        <Breadcrumb />
        <Separator />

        <PatientDetail />
      </SidebarInset>
    </SidebarProvider>
  )
}
