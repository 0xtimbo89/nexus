export type Metadata = {
  name: string;
  description: string;
  collection: string;
  image_url: string;
  animation_url: string;
  model_url: string;
  attributes: Attribute[];
};

export type Attribute = {
  trait_type: string;
  value: string;
};
