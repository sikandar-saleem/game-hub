import axios  from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f320342b2e984e989f98b8a4c1a6c6c4'
  }
})
