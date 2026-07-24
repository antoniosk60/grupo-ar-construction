
import React from 'react';

export interface Project {
  id: string;
  title: string;
  // Fix: Updated category union to match the actual service areas of Grupo-AR
  category: 'Electricidad' | 'Industrial' | 'Telecomunicaciones' | 'Remodelaciones' | 'Impermeabilización' | 'Construcciones';
  description: string;
  fullDescription: string;
  services: string[];
  imageUrl: string;
  year: number;
  client?: string;
  location?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

const DRIVE_MAP: Record<string, string> = {
  // Legacy or friendly named assets
  "aplica_imper_pre.jpg": "1V6_v-Y5t_l4m4L3R8f4r4_4L3R8f4r4_4L3R8",
  "cableado.jpg": "1GyS9atRx0sgmjllKWWKrAtQ-nxZwkymC",
  "colaboracion.png": "11MJBms0W7-z1DuwZPXIsBlRYqHyHG21T",
  "descarga.png": "1mbuxoeFFEBTO8s3JeqaVN2fMLG4-r3dn",
  "electricidad.jpg": "1aUq-djZqYoha8-ePZYrJ6txT9KE7ZL9-",
  "equipo_trabajo.jpg": "1AAucFnVYs4gwE5jMJPY99D4a3ezyDrcC",
  "espinal_1.jpg": "1n0Af2rclZLfX33yDQFJ3jyQBdqWXbWvk",
  "espinal_2.jpg": "1SVXUXLhfJC7cKJEiC90k5LKdwQnnHWP8",
  "espinal_3.jpg": "1erABdjEK_188JOnJjDIDdOXbmeQoi0Xh",
  "espinal_4.jpg": "1OFT3ykFNGboqqptzD6YBAnnC3UTCD_dr",
  "espinal_5.jpg": "1O2MQD1D7UcVENr1hWPA-ZWgUJ-3DnREy",
  "espinal_6.png": "15vWxPVAMa-JdTzbdktL_w7Ph89pbzq3u",
  "estructurado.jpg": "1Z12TJt2ESjCXf4ok5NVipWKR-WaHOPf5",
  "iluminacion.jpg": "19XzlLKfmS3g9Ge8zdrNElxAv8tZNUbdc",

  // WA series images
  "img-20260419-wa0036.jpg": "1yyZkCFTh0FIwKLFpmZj9QVRRw4Nbkwuf",
  "img-20260419-wa0037.jpg": "1weSv5Zvqz8xWVTCD4r8u7SLfi9UxbfSP",
  "img-20260419-wa0038.jpg": "1luP3fZBUc08DXETfZsqfKFLdZvo0Dncg",
  "img-20260419-wa0039.jpg": "1S8yh6I7siQXkK95REDt5SbRI0lCy418W",
  "img-20260419-wa0040.jpg": "1vqGVYkwUUPCIRnq6AVwkX7Gj6ykeNznM",
  "img-20260419-wa0041.jpg": "1bfG73Obl07WiuJdgVy6l69sH8RZVxAvV",
  "img-20260419-wa0042.jpg": "1yQY4PZeQrsHKPpNjIza2fbi8WDEmZGJI",
  "img-20260419-wa0043.jpg": "1t_5pZO_kTsjHOr3GwY2pEn0uG-5dseB2",
  "img-20260419-wa0044.jpg": "1fFsH6s1VpSep6Fb8vs3aCgbyCWMHx5DL",
  "img-20260419-wa0045.jpg": "1qlAap7DdohRtKUsCYuFtJsl83AoAHlfV",
  "img-20260419-wa0046.jpg": "1FHtDTEB66MFDzPFOM8vZv7Cm_rp3wU46",
  "img-20260419-wa0047.jpg": "1kWIYg96Sh0IgPLrxY8k3ButIm-PnqwSN",
  "img-20260419-wa0048.jpg": "1C2dBXDKEBho3_nPaJ21DE2daxjyULoTj",
  "img-20260419-wa0049.jpg": "1t4pfn4YznehC-ehelg3hYlV0MwVUJOMJ",
  "img-20260419-wa0050.jpg": "1FvQ-BpU3Sf13cSHa-HyMVsy4ne851O5D",
  "img-20260419-wa0051.jpg": "1a1MJnpJaDVbjyfh-hJJu-ozak4YppFMu",
  "img-20260419-wa0052.jpg": "1MUbpPEI8X3-JaIbeWoo7iRCO2_mfujU-",
  "img-20260419-wa0053.jpg": "1xru02iFR9RnW9aoEvaVfN8uf7DspL2S5",
  "img-20260419-wa0054.jpg": "1QojttZUQty9zHn6ihgJ--5ewvCFawAuP",
  "img-20260419-wa0055.jpg": "1hoGUkLZTOReb0UXa3ZzEXzzwhPDq_VYU",
  "img-20260419-wa0056.jpg": "1uroLYpOy-cdFZSWr4gR8JxMoJxdn9k4B",
  "img-20260419-wa0057.jpg": "1NZ8IMsUUZh_wxFksMm7jtP4Zm1GEPGCe",
  "img-20260419-wa0058.jpg": "17yN35hTL5T2gPoZvF5OcEUT4GHPjEtyq",
  "img-20260419-wa0059.jpg": "1wytyPaTd_xmN1pQKNc3X1VJEHU5K0S49",
  "img-20260419-wa0060.jpg": "1yTGNseFfyxMMYQoO2qw3XPLPHOK2jWYN",
  "img-20260419-wa0061.jpg": "1c_2d6LgV1oTaMd2JpEwrYc_nfZkpz3nw",
  "img-20260419-wa0062.jpg": "1wdY3-xcNRkQzyZHXPnAj6tUP_Y8ZKhmm",
  "img-20260419-wa0063.jpg": "1ItLTcFBrxRlQlBP6Ln4rn47N5AyHtQQs",
  "img-20260419-wa0064.jpg": "102RKpU8xySolvKDxHwXUyAnO-GRjfi_C",
  "img-20260419-wa0065.jpg": "1XzBn9kDuz5oxvWzz4At0seKMaIKH6pDV",
  "img-20260419-wa0066.jpg": "1T0tLuZEtcSKOtn-exZHyhBB1CQglEiAy",
  "img-20260419-wa0067.jpg": "1zy4Gm9tRNb4nhYtcBYWjBVzBNJLGXhN1",
  "img-20260419-wa0068.jpg": "1WxGmcvyJwWbgIkTN_pqS-fiRSzHhefcE",
  "img-20260419-wa0069.jpg": "1fWs0taXrFK3ehSspeuo8QnA3r62ONUaI",
  "img-20260419-wa0070.jpg": "10H9_l6cXvQHYWYvdIxn4jFnU6xjhV8Gv",
  "img-20260419-wa0071.jpg": "10H9_l6cXvQHYWYvdIxn4jFnU6xjhV8Gv",

  // Synthetic references used in components
  "input_file_0.png": "1n0Af2rclZLfX33yDQFJ3jyQBdqWXbWvk",
  "input_file_1.png": "1SVXUXLhfJC7cKJEiC90k5LKdwQnnHWP8",
  "input_file_2.png": "1aUq-djZqYoha8-ePZYrJ6txT9KE7ZL9-",
  "input_file_3.png": "1Z12TJt2ESjCXf4ok5NVipWKR-WaHOPf5",
  "input_file_4.png": "1erABdjEK_188JOnJjDIDdOXbmeQoi0Xh",
  "input_file_5.png": "1GyS9atRx0sgmjllKWWKrAtQ-nxZwkymC",
  "input_file_6.png": "19XzlLKfmS3g9Ge8zdrNElxAv8tZNUbdc",
  "input_file_7.png": "1OFT3ykFNGboqqptzD6YBAnnC3UTCD_dr",
  "input_file_8.png": "1O2MQD1D7UcVENr1hWPA-ZWgUJ-3DnREy",
  "input_file_9.png": "1yyZkCFTh0FIwKLFpmZj9QVRRw4Nbkwuf",
  "input_file_10.png": "1V6_v-Y5t_l4m4L3R8f4r4_4L3R8f4r4_4L3R8",
  "input_file_11.png": "1fFsH6s1VpSep6Fb8vs3aCgbyCWMHx5DL",
  "input_file_12.png": "1qlAap7DdohRtKUsCYuFtJsl83AoAHlfV",
  "input_file_13.png": "1FHtDTEB66MFDzPFOM8vZv7Cm_rp3wU46",
  "input_file_14.png": "1kWIYg96Sh0IgPLrxY8k3ButIm-PnqwSN",
  "input_file_15.png": "1hoGUkLZTOReb0UXa3ZzEXzzwhPDq_VYU",
  "input_file_16.png": "1uroLYpOy-cdFZSWr4gR8JxMoJxdn9k4B",
  "input_file_17.png": "1NZ8IMsUUZh_wxFksMm7jtP4Zm1GEPGCe",
  "input_file_18.png": "17yN35hTL5T2gPoZvF5OcEUT4GHPjEtyq",
  "input_file_19.png": "15vWxPVAMa-JdTzbdktL_w7Ph89pbzq3u"
};

const normalizeKey = (key: string): string => {
  return key
    .toLowerCase()
    .replace(/^x22/, '')
    .replace(/["']/g, '')
    .trim();
};

export const getImageUrl = (url: string): string => {
  if (!url) return '';
  
  // Extract direct ID if a full drive.google.com link is supplied
  if (url.includes('drive.google.com/file/d/')) {
    const parts = url.split('/file/d/');
    if (parts[1]) {
      const fileId = parts[1].split('/')[0].replace(/^x22/, '').trim();
      return `https://raw.githubusercontent.com/antoniosk60/grupo-ar-construction/refs/heads/main/src/assets/images/grupo_ar_oficial_logo.jpg`;
    }
  }

  const normalized = normalizeKey(url);
  const driveId = DRIVE_MAP[normalized];
  if (driveId) {
    return `https://raw.githubusercontent.com/antoniosk60/grupo-ar-construction/refs/heads/main/src/assets/images/grupo_ar_oficial_logo.jpg`;
  }

  if (url.startsWith('input_file_')) {
    return `https://antoniosk60.github.io/Grupo-AR/img/${url}`;
  }

  return url;
};

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  category?: 'Electricidad' | 'Industrial' | 'Telecomunicaciones' | 'Remodelaciones' | 'Impermeabilización' | 'Construcciones' | string
) => {
  const target = e.currentTarget;
  const currentSrc = target.src || '';

  // Prevent infinite loops if fallback fails
  if (target.getAttribute('data-failed-attempts')) {
    const attempts = parseInt(target.getAttribute('data-failed-attempts') || '0', 10);
    if (attempts >= 4) {
      target.src = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=90&w=1600';
      return;
    }
    target.setAttribute('data-failed-attempts', String(attempts + 1));
  } else {
    target.setAttribute('data-failed-attempts', '1');
  }

  // If a lh3.googleusercontent.com link fails, try the alternative google docs representation
  if (currentSrc.includes('lh3.googleusercontent.com/d/')) {
    const parts = currentSrc.split('lh3.googleusercontent.com/d/');
    if (parts[1]) {
      const fileId = parts[1].split(/[/?#=]/)[0];
      target.src = `https://docs.google.com/uc?export=view&id=${fileId}`;
      return;
    }
  }

  // Fallback to ultra-high quality polished Unsplash photos based on category
  const fallbacks: Record<string, string> = {
    'Electricidad': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=90&w=1600',
    'Industrial': 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=90&w=1600',
    'Telecomunicaciones': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=90&w=1600',
    'Remodelaciones': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=1600',
    'Impermeabilización': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=90&w=1600',
    'Construcciones': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=90&w=1600'
  };

  const matchedFallback = category ? fallbacks[category] : undefined;
  target.src = matchedFallback || 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=90&w=1600';
};
