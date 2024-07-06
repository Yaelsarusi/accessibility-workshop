const SectionWrapper = ({ children, ...props }) => (
    <div {...props} className={`py-16 lg:py-24 ${props.className || ""}`}>
        {children}
    </div>
)

export default SectionWrapper