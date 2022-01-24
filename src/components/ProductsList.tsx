export default function ProductsList ({ title, children }: {title: string, children: React.ReactNode }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  )
} 
