import React, { useContext } from 'react'
import { SProps, IContext } from 'ssr-types-react'
import Player from '@/components/player'
import Brief from '@/components/brief'
import Recommend from '@/components/recommend'
import Search from '@/components/search'
import { Ddata, RecommendDataNode, PlayerDataNode, BriefDataNode } from '@/interface'

export default (props: SProps) => {
  const { state, dispatch } = useContext<IContext<Ddata>>(window.STORE_CONTEXT)
  return (
    <div>
      <Search></Search>
      {
        state?.detailData?.data[0].dataNode ? <div>
          <Player data={state.detailData.data[0].dataNode as PlayerDataNode[]} />
          <Brief data={state.detailData.data[1].dataNode as BriefDataNode[]} />
          <Recommend data={state.detailData.data[2].dataNode as RecommendDataNode[]} />
        </div> : <img src='https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif' className='loading' />
      }
    </div>
  )
}
