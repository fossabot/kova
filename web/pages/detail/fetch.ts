import { RouteComponentProps } from 'react-router'

export default async (ctx: any) => {
  // 阅读文档获得更多信息 http://doc.ssr-fc.com/docs/features$fetch#%E5%88%A4%E6%96%AD%E5%BD%93%E5%89%8D%E7%8E%AF%E5%A2%83

  const data = __isBrowser__ ? await (await window.fetch(`/api/detail/${(ctx as RouteComponentProps<{id: string}>).match.params.id}`)).json() : await ctx.apiDeatilservice.index(ctx.request.params.id)
  return {
    // 建议根据模块给数据加上 namespace防止数据覆盖
    detailData: data
  }
}
