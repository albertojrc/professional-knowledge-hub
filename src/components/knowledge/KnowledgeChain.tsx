interface KnowledgeChainProps {
  nodes: string[]
}

export function KnowledgeChain({ nodes }: KnowledgeChainProps) {
  return (
    <div className="knowledge-chain">
      {nodes.map((node, index) => (
        <span className="chain-fragment" key={`${node}-${index}`}>
          <span className="chain-node">{node}</span>
          {index < nodes.length - 1 && <span className="chain-arrow">→</span>}
        </span>
      ))}
    </div>
  )
}
