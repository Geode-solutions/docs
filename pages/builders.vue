<template>
  <v-row>
    <v-col>
      <h1 class="display-4 ma-5">
        Builders
      </h1>

      <p :class="paragraph">
        In this guide, you will learn fundamental elements to build and modify a mesh and a model in OpenGeode.
      </p>

      <h2 :class="section">
        What are Builders?
      </h2>

      <p
        :class="paragraph"
      >
        As you may have noticed, OpenGeode Meshes and Models are read-only classes.
        You cannot modify them directly. 
      </p>

      <p
        :class="paragraph"
      >
        The goal of this design is to:
        <ol>
          <li>
            clearly identify what operations will affect the class storage,
          </li>
          <li>
            give access to modifying methods on a shorter lifetime.
          </li>
        </ol>
      </p>

      <p
        :class="paragraph"
      >
        Every Mesh or Model has its own corresponding Builder, for example: 
        <ul>
          <li>
            <span v-html="vertexSetBuilder" /> is the builder for <span v-html="vertexSet" />
          </li>
          <li>
            <span v-html="triangulatedSurfaceBuilder" /> is the builder for <span v-html="triangulatedSurface" />
          </li>
          <li>
            <span v-html="brepBuilder" /> is the builder for <span v-html="brep" />
          </li>
        </ul>
      </p>

      <p :class="paragraph">
        The builders inheritance diagram is the same than the one for meshes and models.
        Like them, builders can be templated by their dimension. 
        For example, two aliases are defined for 
        <span v-html="triangulatedSurfaceBuilder" />: 
        <strong>TriangulatedSurfaceBuilder2D</strong> and <strong>TriangulatedSurfaceBuilder3D</strong>.
      </p>
    
      <h2 :class="section">
        Create a Builder
      </h2>

      <p
        :class="paragraph"
      >
        First of all, let's create the builder for its corresponding object:
      </p>

      <!-- eslint-disable -->
    <code class="example">
       // Let's have a TriangulatedSurface3D& called mesh;
      auto mesh_builder = TriangulatedSurfaceBuilder3D::create( mesh );
      ...
      BRep brep;
      BRepBuilder brep_builder( brep );
    </code>
    <!-- eslint-enable -->

      <p
        :class="paragraph"
      >
        Using the static function <code>Builder::create()</code> will automatically identify the builder matching the object to modify it accordingly.
        So if you only need the inherited builder interface, you can do:
      </p>

      <!-- eslint-disable -->
    <code class="example">
       // Let's have a TriangulatedSurface3D& called mesh;
      auto mesh_builder = SurfaceMeshBuilder3D::create( mesh );
    </code>
    <!-- eslint-enable -->

      <h2 :class="section">
        Mesh builders
      </h2>

      <p
        :class="paragraph"
      >
        We will use a simple <span v-html="polygonalSurface" /> and its builder and see what we can do.
      </p>

      <img src="@/assets/builders.svg">

      <p
        :class="paragraph"
      >
        There are 3 main types of operations on a surface:
        <ul>
          <li>
            create, modify or delete a point which is a vertex with coordinates
          </li>
          <li>
            create, modify or delete a polygon (or a triangle)
          </li>
          <li>
            create, modify or delete adjacency between polygons
          </li>
        </ul>
      </p>

      <p
        :class="paragraph"
      >
        Let's start with an example of mesh creation.
      </p>

      <!-- eslint-disable -->
    <code class="example">
      auto mesh = PolygonalSurface2D::create();
      auto mesh_builder = PolygonalSurfaceBuilder3D::create( *mesh );

      // Create some points
      const auto pt0 = mesh_builder->create_point( { {0., 0.} } );
      const auto pt1 = mesh_builder->create_point( { {1., 0.} } );
      const auto pt2 = mesh_builder->create_point( { {1., 1.} } );
      const auto pt3 = mesh_builder->create_point( { {2., 0.} } );
      const auto pt4 = mesh_builder->create_point( { {2., 1.} } );

      // Create some polygons
      const auto poly0 = mesh_builder->create_polygon( {0, 1, 2} ); // a triangle
      const auto poly1 = mesh_builder->create_polygon( {1, 3, 4, 2} ); // a quad

      // Connect these polygons programmatically
      mesh_builder->set_polygon_adjacent( {poly0, 1}, poly1 ); // {poly0, 1} is the PolygonEdge to connect
      mesh_builder->set_polygon_adjacent( {poly1, 3}, poly0 ); // {poly1, 3} is the PolygonEdge to connect
      // or automatically
      mesh_builder->compute_polygon_adjacencies();
    </code>
    <!-- eslint-enable -->

      <p
        :class="paragraph"
      >
        And now, two examples of deletion. 
        You have to give for every elements which are the ones to keep and the ones to remove.
      </p>

      <p
        :class="paragraph"
      >
        Deleting the polygon #0 will remove the polygon and renumber the remaining polygons.
      </p>

      <!-- eslint-disable -->
    <code class="example">
      mesh_builder->delete_polygons( {true, false} ); // Only the first polygon to remove
    </code>
    <!-- eslint-enable -->

      <img src="@/assets/builders-1.svg">

      <p
        :class="paragraph"
      >
        Deleting the vertex #3 will remove the vertex, renumber the remaining vertices and remove the polygons containing this vertex.
      </p>

      <!-- eslint-disable -->
    <code class="example">
      mesh_builder->delete_vertices( {false, false, false, true, false} ); // Only the fourth vertex to remove

      // To remove several vertices at once
      mesh_builder->delete_vertices( {false, true, false, true, false} ); // The second and fourth vertices to remove
    </code>
    <!-- eslint-enable -->
      
      <img src="@/assets/builders-2.svg">


      <p
        :class="nb"
      >
        Note: Deletion methods can renumber your entire mesh to keep continuous indexing.
        To know how the indexing was changed, all deletion methods return a table containing the mapping between the old index and the new index.
      </p>

      <p
        :class="paragraph"
      >
        Equivalent methods can be found for all other mesh builders.
      </p>

      <h2 :class="section">
        Model Builders
      </h2>

      <p
        :class="paragraph"
      >
        To build a model, you need to interact with three concepts:
        <ul>
          <li>
            add or remove a Component to the model
          </li>
          <li>
            add or remove a relation between two model Components
          </li>
          <li>
            add or remove information in the <span v-html="vertexIdentifier" />
          </li>
        </ul>
      </p>

      
      <h3
        :class="subsection"
      >
        Create the Components and their relations
      </h3>
      <p
        :class="paragraph"
      >
        There are predefined relations between Component types.
        We will use the <span v-html="sctn" /> as example and build the following section:
      </p>

      <img src="@/assets/builders-3.svg">

      <!-- eslint-disable -->
    <code class="example">
      Section section;
      SectionBuilder builder( section );
    </code>
    <!-- eslint-enable -->

      
      <p
        :class="paragraph"
      >
        Create the components
      </p>
      
      <!-- eslint-disable -->
    <code class="example">
      const auto& corner0_id = builder.add_corner(); // Add a new corner and get its unique identifier
      const auto& corner0 = section.corner( corner0_id ); // Get the actuel corner in the section
      ...
      const auto& line0_id = builder.add_line();
      const auto& line0 = section.line( line0_id );
      ...
      const auto& surface0_id = builder.add_surface();
      const auto& surface0 = section.surface( surface0_id );
    </code>
    <!-- eslint-enable -->
      
      <p
        :class="paragraph"
      >
        Create the relations
      </p>
      
      <!-- eslint-disable -->
    <code class="example">
      builder.add_corner_line_boundary_relationship( corner0, line3 );
      builder.add_corner_line_boundary_relationship( corner0, line1 );
      builder.add_corner_line_boundary_relationship( corner1, line0 );
      builder.add_corner_line_boundary_relationship( corner1, line2 );
      ...
      builder.add_line_surface_boundary_relationship( line0, surface0 );
      builder.add_line_surface_boundary_relationship( line1, surface0 );
      builder.add_line_surface_boundary_relationship( line2, surface0 );
      builder.add_line_surface_boundary_relationship( line3, surface0 );
    </code>
    <!-- eslint-enable -->

    
      <h3
        :class="subsection"
      >
        Complete the unique vertex identification
      </h3>

      <p
        :class="paragraph"
      >
        This unique identification is more complex to fill.
        You need to identify all the mesh component vertices that represent the same point in the model.
      </p>

      <p
        :class="paragraph"
      >
        Let's focus only on the unique vertex corresponding to the <strong>corner0</strong> in the picture.
        Then this vertex is representing the corner0, one vertex of line1 (assuming vertex #0) and line3 (assuming vertex #1) and one vertex (assuming vertex #3) of surface0.
      </p>

      
      <!-- eslint-disable -->
    <code class="example">
      const auto vertex_id = builder.create_unique_vertex();
      builder.set_unique_vertex( {corner0.component_id(), 0} ); // Link the vertex #0 of corner0 to vertex_id
      builder.set_unique_vertex( {line1.component_id(), 0} ); // Link the vertex #0 of line1 to vertex_id
      builder.set_unique_vertex( {line3.component_id(), 1} ); // Link the vertex #1 of line3 to vertex_id
      builder.set_unique_vertex( {surface0.component_id(), 3} ); // Link the vertex #3 of surface0 to vertex_id
    </code>
    <!-- eslint-enable -->

    
      <p
        :class="paragraph"
      >
        Repeat this process for every unique vertex of the section.
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    section: 'display-2 ma-5 pa-5',
    subsection: 'display-1 mx-10 mt-5 px-10',
    paragraph: 'body-1 my-5',
    nb: 'secondary font-italic body-1 pa-5',
    vertexSet:
      "<a href='/opengeode?page=class_geode_VertexSet.html'><code>VertexSet</code></a>",
    triangulatedSurface:
      "<a href='/opengeode?page=class_geode_TriangulatedSurface.html'><code>TriangulatedSurface</code></a>",
    polygonalSurface:
      "<a href='/opengeode?page=class_geode_PolygonalSurface.html'><code>PolygonalSurface</code></a>",
    brep:
      "<a href='/opengeode?page=class_geode_BRep.html'><code>BRep</code></a>",
    sctn:
      "<a href='/opengeode?page=class_geode_Section.html'><code>Section</code></a>",
    vertexSetBuilder:
      "<a href='/opengeode?page=class_geode_VertexSetBuilder.html'><code>VertexSetBuilder</code></a>",
    triangulatedSurfaceBuilder:
      "<a href='/opengeode?page=class_geode_TriangulatedSurfaceBuilder.html'><code>TriangulatedSurfaceBuilder</code></a>",
    polygonalSurfaceBuilder:
      "<a href='/opengeode?page=class_geode_PolygonalSurfaceBuilder.html'><code>PolygonalSurfaceBuilder</code></a>",
    brepBuilder:
      "<a href='/opengeode?page=class_geode_BRepBuilder.html'><code>BRepBuilder</code></a>",
    relationships:
      "<a href='/opengeode?page=class_geode_Relationships.html'><code>Relationships</code></a>",
    vertexIdentifier:
      "<a href='/opengeode?page=class_geode_VertexIdentifier.html'><code>VertexIdentifier</code></a>",
  })
}
</script>

