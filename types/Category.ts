export type Category = {
    id: number;
    _lft: number;
    _rgt: number;
    parent_id: number | null;
    name: string;
    slug: string;
    position: number;
    children: Category[];
}

export type HomeCategory = {
    id: number;
    name: string;
    slug: string;
    image : string;
}