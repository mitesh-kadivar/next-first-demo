export default function handler(req: any, res: any) {
    const params = req.query.params
    console.log(params)
    res.status(200).json(params)
}