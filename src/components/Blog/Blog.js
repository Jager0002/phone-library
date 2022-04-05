import React from "react";

const Blog = () => {
  return (
    <div className="mx-6 my-4">
      <h2 className="text-center font-semibold">What is Semantic Tag?</h2>
      <h2>
        Semantic tags are basically meaningful tags that has uses as the name
        suggests, like article, nav, section etc. This type of tags are used to
        have mening both to browser and developer.
      </h2>

      <h2 className="text-center font-semibold">
        Inline, inline-block, block?
      </h2>
      <h2 className="underline font-semibold">Inline:</h2>
      <h2>
        Inline elements are used in a fragment, and it takes the properties of
        the upper elements. So, inline elements does not start a new line and
        has the properties of previous elements for which syles like height,
        width cannot be set manually. for example: span, a ,img are inline
        elements.
      </h2>
      <h2 className=" underline font-semibold">inline-block:</h2>
      <h2>
        If we display inline-block the properties will be changed for instance
        we can fix height and width.
      </h2>
      <h2 className="underline font-semibold">block</h2>
      <h2>
        Block element appears in different lines and will take full width, and
        also the heights and width can be altered.
      </h2>
    </div>
  );
};

export default Blog;
