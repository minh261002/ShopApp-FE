
export type Slider = {
    id: number;
    name: string;
    desc: string | null;
    items: SliderItem[];
};

export type SliderItem = {
    id: number;
    title: string;
    link: string | null;
    image: string;
    mobile_image: string;
};