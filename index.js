
  // Fetch a random nature image from Unsplash API
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
.then(res => res.json()) // Parse the JSON response
.then(data => { 
    // Set the body background image to the fetched image
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    // Display the author's name
    document.getElementById("author").textContent = `By: ${data.user.name}`;
})
.catch(_err => {
    // Fallback image and author if the fetch fails
    document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjczNTQ4NzV8&ixlib=rb-4.0.3')`; 
    document.getElementById("author").textContent = `By: Unsplash`;
});

// Fetch Dogecoin data from CoinGecko API
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
.then(res => {
    // Check if the response is OK
    if (!res.ok) {
        throw Error('Something went wrong'); // Throw an error for bad responses
    }
    return res.json(); // Parse the JSON response
})
.then(data => {
    // Display Dogecoin image and name
    document.getElementById("Crypto-top").innerHTML = `
        <img src="${data.image.small}" />
        <span>${data.name}</span>`;
    
    // Display current, high, and low prices of Dogecoin
    document.getElementById("crypto").innerHTML += `
        <p>🚨: $${data.market_data.current_price.usd}</p>
        <p>🚨: $${data.market_data.high_24h.usd}</p>
        <p>🚨: $${data.market_data.low_24h.usd}</p>`;
})
.catch(err => console.error(err)); // Log any errors to the console

// Function to update the current time
function getcurrentTime() {
const date = new Date(); // Get the current date and time
document.getElementById("time").textContent = date.toLocaleTimeString("en-US", { timeStyle: "short" }); // Format and display the time
}

// Call getcurrentTime every second
setInterval(getcurrentTime, 1000);

// Get the user's geolocation
navigator.geolocation.getCurrentPosition(position => {
// Fetch weather data using the user's coordinates
fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
    .then(res => {
        // Check if the response is OK
        if (!res.ok) {
            throw Error("Weather data not available"); // Handle errors
        }
        return res.json(); // Parse the JSON response
    })
    .then(data => {
        console.log(data); // Log the weather data
        // Construct the URL for the weather icon
        const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
        // Display the weather icon, temperature, and location name
        document.getElementById("Weather").innerHTML = `
            <img src="${iconURL}" alt="Weather Icon" />
            <p>${Math.round(data.main.temp)}°F</p>
            <p>${data.name}</p>`;
    })
    .catch(err => console.error(err)); // Log any errors to the console
}, error => {
// Handle geolocation errors
console.error("Geolocation error:", error);
});

/** {
  id: '-SO3JtE3gZo',
  slug: 'green-hills-with-forest-under-cloudy-sky-during-daytime--SO3JtE3gZo',
  alternative_slugs: {
    en: 'green-hills-with-forest-under-cloudy-sky-during-daytime--SO3JtE3gZo',
    es: 'colinas-verdes-con-bosque-bajo-el-cielo-nublado-durante-el-dia--SO3JtE3gZo',
    ja: '昼間の曇り空の下に森のある緑の丘陵--SO3JtE3gZo',
    fr: 'collines-verdoyantes-avec-foret-sous-ciel-nuageux-pendant-la-journee--SO3JtE3gZo',
    it: 'colline-verdi-con-foresta-sotto-cielo-nuvoloso-durante-il-giorno--SO3JtE3gZo',
    ko: '낮에는-흐린-하늘-아래-숲이-있는-푸른-언덕--SO3JtE3gZo',
    de: 'grune-hugel-mit-wald-unter-bewolktem-himmel-am-tag--SO3JtE3gZo',
    pt: 'colinas-verdes-com-floresta-sob-ceu-nublado-durante-o-dia--SO3JtE3gZo'
  },
  created_at: '2017-09-24T13:44:58Z',
  updated_at: '2024-09-26T09:06:42Z',
  promoted_at: null,
  width: 5184,
  height: 3240,
  color: '#8ca640',
  blur_hash: 'LWF?Xd?aaxWB?K-:f6aytA%2t6j]',
  description: null,
  alt_description: 'green hills with forest under cloudy sky during daytime',
  breadcrumbs: [],
  urls: {
    raw: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjczNTQ4NzV8&ixlib=rb-4.0.3',
    full: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjczNTQ4NzV8&ixlib=rb-4.0.3&q=85',
    regular: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjczNTQ4NzV8&ixlib=rb-4.0.3&q=80&w=1080',
    small: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjczNTQ4NzV8&ixlib=rb-4.0.3&q=80&w=400',
    thumb: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjczNTQ4NzV8&ixlib=rb-4.0.3&q=80&w=200',
    small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1506260408121-e353d10b87c7'
  },
  links: {
    self: 'https://api.unsplash.com/photos/green-hills-with-forest-under-cloudy-sky-during-daytime--SO3JtE3gZo',
    html: 'https://unsplash.com/photos/green-hills-with-forest-under-cloudy-sky-during-daytime--SO3JtE3gZo',
    download: 'https://unsplash.com/photos/-SO3JtE3gZo/download?ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjczNTQ4NzV8',
    download_location: 'https://api.unsplash.com/photos/-SO3JtE3gZo/download?ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjczNTQ4NzV8'
  },
  likes: 2861,
  liked_by_user: false,
  current_user_collections: [],
  sponsorship: null,
  topic_submissions: {
    nature: { status: 'approved', approved_on: '2020-04-06T14:20:13Z' },
    wallpapers: { status: 'approved', approved_on: '2020-04-06T14:20:10Z' }
  },
  asset_type: 'photo',
  user: {
    id: 'vzVXoYxqJJ8',
    updated_at: '2024-09-25T01:17:39Z',
    username: 'claudiotesta',
    name: 'Claudio Testa',
    first_name: 'Claudio',
    last_name: 'Testa',
    twitter_username: null,
    portfolio_url: 'http://testa-photography.com/',
    bio: null,
    location: 'Germany',
    links: {
      self: 'https://api.unsplash.com/users/claudiotesta',
      html: 'https://unsplash.com/@claudiotesta',
      photos: 'https://api.unsplash.com/users/claudiotesta/photos',
      likes: 'https://api.unsplash.com/users/claudiotesta/likes',
      portfolio: 'https://api.unsplash.com/users/claudiotesta/portfolio',
      following: 'https://api.unsplash.com/users/claudiotesta/following',
      followers: 'https://api.unsplash.com/users/claudiotesta/followers'
    },
    profile_image: {
      small: 'https://images.unsplash.com/profile-1473615961770-80daa5118109?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
      medium: 'https://images.unsplash.com/profile-1473615961770-80daa5118109?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
      large: 'https://images.unsplash.com/profile-1473615961770-80daa5118109?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128'
    },
    instagram_username: 'testaphotography',
    total_collections: 1,
    total_likes: 94,
    total_photos: 22,
    total_promoted_photos: 8,
    total_illustrations: 0,
    total_promoted_illustrations: 0,
    accepted_tos: true,
    for_hire: false,
    social: {
      instagram_username: 'testaphotography',
      portfolio_url: 'http://testa-photography.com/',
      twitter_username: null,
      paypal_email: null
    }
  },
  exif: {
    make: 'Canon',
    model: 'Canon EOS 600D',
    name: 'Canon, EOS 600D',
    exposure_time: '1/13',
    aperture: '8.0',
    focal_length: '18.0',
    iso: 100
  },
  location: {
    name: 'Haselschacher Buck, Vogtsburg, Germany',
    city: 'Vogtsburg',
    country: 'Germany',
    position: { latitude: 48.0959879, longitude: 7.69210129999999 }
  },
  meta: { index: true },
  public_domain: false,
  tags: [
    { type: 'landing_page', title: 'nature', source: [Object] },
    { type: 'landing_page', title: 'landscape', source: [Object] },
    { type: 'search', title: 'germany' },
    { type: 'landing_page', title: 'green', source: [Object] },
    { type: 'search', title: 'field' },
    { type: 'landing_page', title: 'wallpaper', source: [Object] },
    { type: 'landing_page', title: 'background', source: [Object] },
    { type: 'landing_page', title: 'mountain', source: [Object] },
    { type: 'search', title: 'haselschacher buck' },
    { type: 'search', title: 'vogtsburg' },
    { type: 'landing_page', title: 'backgrounds', source: [Object] },
    { type: 'landing_page', title: 'wallpapers', source: [Object] },
    { type: 'landing_page', title: 'trees', source: [Object] },
    { type: 'search', title: 'hills' },
    { type: 'landing_page', title: 'forest', source: [Object] },
    { type: 'search', title: 'hill' },
    { type: 'landing_page', title: 'grass', source: [Object] },
    { type: 'search', title: 'evening' },
    { type: 'landing_page', title: 'mountains', source: [Object] },
    { type: 'search', title: 'atmospheric' }
  ],
  views: 54747534,
  downloads: 433662,
  topics: [
    {
      id: '6sMVjTLSkeQ',
      title: 'Nature',
      slug: 'nature',
      visibility: 'featured'
    },
    {
      id: 'bo8jQKTaE0Y',
      title: 'Wallpapers',
      slug: 'wallpapers',
      visibility: 'featured'
    }
  ]
}*/