function Item({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = name + "✅";
    }
    return (
        <li className="item">
        {itemContent}
        </li>
    );
}

function PackingList() {
    return (
        <section>
            <h1>Sally Ride&apos;s Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helment with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}

export default PackingList;