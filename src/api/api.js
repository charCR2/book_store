import qs from 'querystring'
import fetch from '../plugin/fetch'

//获取带书籍数量的父分类
const baseURL='';

//手机端没有跨域问题,所以打包后要在url前加上baseURL,api+把去掉
export function getCategories(){
  return fetch({
    url: baseURL+'/cats/lv2/statistics',
  })
}

//获取排名分类
export function getRankCategory(){
  return fetch({
    url: baseURL+'/ranking/gender',
  })
}

//获取带子分类的分类
export function  getSubCategory(){
  return fetch({
    url: baseURL+'/cats/lv2',
  })
}

//获取分类详情
export function getCategoryInfo(category_type){
  let query = qs.stringify(category_type);
  return fetch({
    url: baseURL+'/book/by-categories?' + query,
  })
}

//获取书籍详情
export function getBookInfo(id){
  return fetch({
    url: baseURL+'/book/'+id,
  })
}

//获取书籍相关推荐
export function  getRecommend(id){
  return fetch({
    url: baseURL+'/book/'+id+'/recommend',
  })
}

//获取作者名下的书籍
export function getAuthorBook(author){
  let author_query = qs.stringify(author);
  return fetch({
    url:baseURL+'/author-books?'+author_query,
  })
}

//获取书籍源
export function getBookSources(bookid){
  let book_source = qs.stringify(bookid);
  return fetch({
    url: baseURL+'/atoc?'+book_source,
  })
}

//获取书籍章节
export function  getChapter(id){
  return fetch({
    url: baseURL+'/atoc/'+id+'?view=chapters',
  })
}

//获取章节详细内容
export function getBookChapter(link){
  return fetch({
    url:'/content/chapter/'+link,
    // url:'http://chapterup.zhuishushenqi.com/chapter/'+link,
  })
}

//获取搜索结果
export function getSearchResult(word){
  let query = qs.stringify(word);
  return fetch({
    url:baseURL+'/book/fuzzy-search?'+query,
  })
}

//获取热搜词
export function getSearchHotwords(){
  return fetch({
    url: baseURL+'/book/search-hotwords',
  })
}

//获取排名详情
export function getRank(categoryid){
  return fetch({
    url:baseURL+'/ranking/'+categoryid,

  })
}




