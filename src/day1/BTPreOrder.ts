function walk(node: BinaryNode<number> | null, path: number[]): number[] {
    // Establish a Base case. Here the case is end of the tree
    if (!node) return path;

    // Recursion is split into three steps.

    // pre - Operations that happen before recursions.
    path.push(node.value);
    // recurs - The recurring function
    walk(node.left, path);
    walk(node.right, path);
    // post - Once the recursions ends and everything bubbles up,
    // this is the final step of all.
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
