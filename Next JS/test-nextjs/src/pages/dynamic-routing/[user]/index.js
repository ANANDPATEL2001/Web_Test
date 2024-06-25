import { useRouter } from "next/router"

const index = () => {
    const router = useRouter()
    console.log("This is router : ", router?.query?.user)
    return (
        // This is Dynamic Routing used to ascess basically the parameters given in the path/urls
        <div>page {'->'} dynamic-routing {'->'} {router?.query?.user} {'->'} index</div>
    )
}

export default index