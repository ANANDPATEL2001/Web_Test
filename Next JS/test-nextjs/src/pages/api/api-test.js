// All the content within this file will automatically be converted to the backend or similar to the Node syntax
// api folder within pages folder does not support any front end / UI part in any fashion
export default function handler(req, res) {
    res.status(200).send({ message: "pages -> api -> api-test" })
}