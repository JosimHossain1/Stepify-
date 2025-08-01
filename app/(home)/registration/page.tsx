import { Registration } from "@/app/components/Authentication/Registration"


export default function RegistrationPage() {
  return (
    <div className="bg-muted flex flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Registration />
      </div>
    </div>
  )
}
