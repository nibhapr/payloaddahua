import { TableOfContents } from '@/blocks/TableOfContents/Component'
import { Product } from '@/payload-types'
import { Fragment } from 'react'

const blockComponents = {
  tableOfContents: TableOfContents,
}

export const RenderBlocks: React.FC<{
  blocks: Product['blockTest']
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  <Block {...block} />
                </div>
              )
            }
            return null
          }
        })}
      </Fragment>
    )
  }
  return null
}
