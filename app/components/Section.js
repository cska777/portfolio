import classNames from "classnames"

export const Section = ({children, className,id}) => {
    return(
        <section id={id} className={classNames("sectionStyleGlo",className)}>{children}</section>
    )
}