export const CATEGORIES = [
  {
    slug : 'news',
    name : 'News',
    path : 'news',
    bg : '#f7ad27'
  },
  {
    name : 'Music',
    path : 'music',
    bg : '#eeff38'
  },
  {
    name : 'Video',
    path : 'video',
    bg : '#b7ff5e'
  },
  {
    name : 'Note',
    path : 'note',
    bg : '#5eefff'
  },
  {
    name : 'Todos',
    path : 'todos',
    bg : '#10a5b5'
  },
  {
    name : 'Mail',
    path : 'mail',
    bg : '#3e4ac9'
  }
];

export const SUBCATEGORIES = [
  {
    parent : 'news',
    item : [
      {
        slug : 'football',
        name : 'Football',
        path : 'news/football',
        bg : '#f542ce'
      },
      {
        slug : 'cafebiz',
        name : 'Cafebiz',
        path : 'news/cafebiz',
        bg : '#b82567'
      },
      {
        slug : 'muong14',
        name : 'Muong14',
        path : 'news/muong14',
        bg : '#967584'
      },
      {
        slug : 'medium',
        name : 'Medium',
        path : 'news/medium',
        bg : '#573142'
      }
    ]
    
  }
]