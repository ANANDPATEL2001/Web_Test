import { useRouter } from "next/router"

const UnknownUser = () => {
    const router = useRouter()
    return (
        <div>page {'->'} dynamic-routing {'->'} {router?.query?.user} {'->'} unknown-user</div>
    )
}

export default UnknownUser