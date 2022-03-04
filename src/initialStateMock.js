const initialState = {
  appReducer: {
    users : [
      // {
      //   id:1,
      //   name:"Name Some",
      //   status:"status",
      //   photos:{small:null},
      //   followed:true
      // },
      // {
      //   id:2,
      //   name:"Name Some",
      //   status:"status",
      //   photos:{small:null},
      //   followed:false
      // },
    ],
    pageSize:10,
    totalUsersQuan:0,
    currentPage: 1,
    isFetching: false,
  },
  personalAccountReducer:{
    userId: 2,
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    contacts: {
      github: '',
      vk: '',
      facebook: '',
      instagram: '',
      twitter: '',
      website: '',
      youtube: '',
      mainLink: '',
    },
    photos: {
      small: '',
      large: ''
    }
  },
  commonReducer:{
    // userId: 0,
    id: 0,
    login: '',
    email: '',
    isFetching: false,
  },
  blogReducer: {
    blogLP : [
      {
        id:1,
        name:"Елизавета Владимировна",
        online: true,
        subject: "Заглавие публикации",
        description: "В ходе валового анализа пространственная вариабельность почвенного покрова выбирает гештальт одинаково по всем направлениям.",
        category: "Общество",
        commentQuan: "14",
        dateTime: "29.10.2013",
      },
      {
        id:2,
        name:"Петя Владимировна",
        online: false,
        subject: "З убликации ходе валового",
        description: "В ходе валового анализа пространственнаяВ ходе валового анализа пространственная вариабельность почвенного покрова выбирает гештальт одинаково по всем направлениям.",
        category: "Общество",
        commentQuan: "14",
        dateTime: "29.10.2013",
      },
      {
        id:3,
        name:"Вася Владимировна",
        online: false,
        subject: "Зочвенного покрова выбирранственная",
        description: "В ходе валового анализа пространственная вариабельность почвенного покрова выбирранственная вариабельность почвенного покрова выбирает гештальт одинаково по всем направлениям.",
        category: "Общество",
        commentQuan: "14",
        dateTime: "29.10.2013",
      },
      {
        id:4,
        name:"Маша Владимировна",
        online: true,
        subject: "В ходе валовогоранственная вариабельность",
        description: "В ходе валовогоранственная вариабельность почвенного покрова выбир анализа пространственная вариабельность почвенного покрова выбирает гештальт одинаково по всем направлениям.",
        category: "Общество",
        commentQuan: "14",
        dateTime: "29.10.2013",
      },
      {
        id:5,
        name:"Федя Петрович",
        online: true,
        subject: "Зочвенного покрова выбирранственная",
        description: "В ходе валового анализа пространственная вариабельность почвенного покрова выбирранственная вариабельность почвенного покрова выбирает гештальт одинаково по всем направлениям.",
        category: "Общество",
        commentQuan: "14",
        dateTime: "29.10.2013",
      },
      {
        id:6,
        name:"Аня Федотовна",
        online: true,
        subject: "В ходе валовогоранственная вариабельность",
        description: "В ходе валовогоранственная вариабельность почвенного покрова выбир анализа пространственная вариабельность почвенного покрова выбирает гештальт одинаково по всем направлениям.",
        category: "Общество",
        commentQuan: "14",
        dateTime: "29.10.2013",
      },
    ],
  }
}

export default initialState
