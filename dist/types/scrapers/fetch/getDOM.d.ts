export declare const getHTML: (url: string, agent: string) => Promise<{
    dom: string;
    res: Response;
}>;
export default getHTML;
