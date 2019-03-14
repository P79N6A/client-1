export interface ISwiper {
  type?: string;
  width?: string;
  height?: string;
  item?: Array<{
    img?: string;
    link?: {
      use?: string;
      map?: number[];
      href?: string;
      phone?: string;
    };
  }>;
  autoPlay?: true;
}
