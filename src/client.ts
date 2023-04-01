export type GenerateImageProps = {
  prompt: string
  // eslint-disable-next-line prettier/prettier
  numImages?: number;
  address: string;
};

export type Image = {
  id: string;
  image_url: string;
  address: string;
  prompt: string;
  isMinted: boolean;
  isFavorited: boolean;
};

export type GetImagesByAddressProps = {
  address: string;
  filters?: {  
    onlyMinted?: true;
    onlyFavorited?: true;
  }
};

export type MintImageProps = {
  imageId: string;
  minted: boolean;
};

export type FavoriteImageProps = {
  imageId: string;
  favorite: boolean;
};

export type DeleteImageProps = {
  imageId: string;
};

export const generateImages = async ({ address, prompt,numImages }: GenerateImageProps): Promise<Image[]> => {
  const response = await fetch('/api/generateImage', { 
   headers: { 'Content-Type': 'application/json' },
   method: "POST",
   body: JSON.stringify({address, prompt,numImages: numImages ?? 3})
  });

  const data = await response.json();

  return data as Image[];
}

export const getImages = async ({ address, filters }: GetImagesByAddressProps): Promise<Image[]> => {
  const params = new URLSearchParams();
  params.append('address', address);

  if(filters) {
    params.append('filters', Object.keys(filters).join(","))
  }

  const response = await fetch(`/api/getImagesByAddress?` + params);
  const data = await response.json();

  return data as Image[];
}

export const mintImage = async ({ imageId, minted }: MintImageProps): Promise<void> => {
  await fetch(`/api/mintImage`, {
    headers: { 'Content-Type': 'application/json' },
    method: "PATCH",
    body: JSON.stringify({imageId, minted})
  });
}

export const favoriteImage = async ({ imageId, favorite }: FavoriteImageProps): Promise<void> => {
  await fetch(`/api/favoriteImage`, {
    headers: { 'Content-Type': 'application/json' },
    method: "PATCH",
    body: JSON.stringify({imageId, favorite })
  });
}

export const deleteImage = async ({ imageId }: DeleteImageProps): Promise<void> => {
  await fetch(`/api/deleteImage`, {
    headers: { 'Content-Type': 'application/json' },
    method: "DELETE",
    body: JSON.stringify({imageId})
  });
}
