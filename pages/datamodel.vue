<template>
  <v-row>
    <v-col>
      <h1 class="display-4 ma-5">
        DataModel
      </h1>

      <p :class="paragraph">
        In this guide, you will learn fundamental elements to understand and manipulate OpenGeode data model.
        One of OpenGeode central classes is
        <span
          v-html="brep"
        />. Let's use this class as an example.
      </p>

      <img src="@/assets/datamodel-1.svg">

      <h2 :class="section">
        Manipulate Surfaces
      </h2>

      <p :class="paragraph">
        A
        <span v-html="brep" />, for Boundary Representation, represents a 3D object by its boundaries.
        In OpenGeode, these 3D boundaries are
        <span
          v-html="surfaces3d"
        /> (in gray on images).
        A BRep is thus composed of Surfaces:
        it means that the class
        <span
          v-html="brep"
        /> inherits from the class
        <span v-html="surfaces3d" />.
        This allows you to know the number of Surfaces in a
        <span v-html="brep" /> :
      </p>

      <!-- eslint-disable -->
    <code class="example">
      BRep my_brep; 
      auto nb = my_brep.nb_surfaces();
    </code>
    <!-- eslint-enable -->

      <img src="@/assets/datamodel-2.svg">

      <p :class="paragraph">
        To iterate on all the Surfaces of a
        <span v-html="brep" />, a range on Surfaces is provided:
      </p>

      <!-- eslint-disable -->
    <code class="example">
      BRep my_brep;
      for( const auto& surface : my_brep.surfaces() )
      {
        // Do something with surface (which is a Surface3D)
        auto nbv = surface.mesh().nb_vertices();
      }
    </code>
    <!-- eslint-enable -->

      <p :class="paragraph">
        Note that each surface is accessed using a constant reference
        as a
        <span v-html="surface3d" /> is neither copyable nor modifiable.
      </p>

      <p :class="paragraph">
        Now, you may want to process only a single
        <span v-html="surface3d" />.
        Hopefully, it is possible to get a specific
        <span v-html="surface3d" /> from a
        <span v-html="brep" />.
        A major feature of OpenGeode is that model components are not continuously numbered:
        they are identified by a unique index
        <span
          v-html="uuid"
        />.
        This is a fundamental design element to allow modifications of OpenGeode models.
        You can thus obtain a
        <span
          v-html="surface3d"
        /> from its
        <span v-html="uuid" />:
      </p>

      <!-- eslint-disable -->
    <code class="example">
      BRep my_brep;
      uuid surf_id;
      const auto& surface = my_brep.surface( surf_id );
    </code>
    <!-- eslint-enable -->

      <h2 :class="section">
        What about other Components?
      </h2>

      <p :class="paragraph">
        We have seen that a
        <span v-html="brep" /> is composed of
        <span v-html="surfaces3d" />.
        These Surfaces delimit volumes regionalizing an object.
        As a consequence, a
        <span
          v-html="brep"
        /> is also composed of
        <span v-html="blocks3d" />.
        The
        <span v-html="brep" /> class inherits from
        <span v-html="surfaces3d" /> and
        <span v-html="blocks3d" />.
      </p>

      <!-- eslint-disable -->
    <code class="example">
      class BRep : public Surfaces3D,
                   public Blocks3D
      {
        ...
      }
    </code>
    <!-- eslint-enable -->

      <p :class="paragraph">
        You can count the number of Blocks, iterate on Blocks,
        get a specific
        <span
          v-html="block3d"
        /> from its
        <span v-html="uuid" /> as done for Surfaces.
      </p>

      <img src="@/assets/datamodel-3.svg">

      <p :class="paragraph">
        But as Surfaces bound Blocks, BRep Surfaces are bounded by Lines (in blue),
        and BRep Lines are bounded by Corners (in green). These classes are named
        <strong>Components</strong>.
        The
        <span v-html="brep" /> class thus inherits from all these classes.
        To ease the conception of custom OpenGeode models, the helper class
        <span
          v-html="addComponents"
        /> is provided.
        The
        <span v-html="brep" /> class is defined as follows:
      </p>

      <img src="@/assets/datamodel-4.svg">

      <!-- eslint-disable -->
    <code class="example">
      class BRep : public AddComponents< 3, Corners, Lines, Surfaces, Blocks >
      {
        ...
      };
    </code>
    <!-- eslint-enable -->

      <p :class="paragraph">
        In this code,
        <strong>3</strong> indicates that all
        <span v-html="corners3d" />,
        <span v-html="lines3d" />,
        <span v-html="surfaces3d" /> and
        <span v-html="blocks3d" /> are 3-dimensional.
      </p>

      <h2 :class="section">
        Relationships between Components
      </h2>

      <p :class="paragraph">
        A BRep is composed of several Components and several types of Components.
        There are some relations between Components;
        for example and as mentionned above, Lines are boundaries of Surfaces
        (boundaries are depicted by curved black arrows).
        All these relations between Components are stored in the class
        <span
          v-html="relationships"
        />.
        <span v-html="brep" /> inherits from this class.
      </p>

      <img src="@/assets/datamodel-5.svg">

      <p :class="paragraph">
        Methods and ranges are provided to request relationships between Components.
        For example, you can get the number of Lines which are boundaries of a
        given Surface (using its
        <span
          v-html="uuid"
        />):
      </p>

      <!-- eslint-disable -->
    <code class="example">
      BRep my_brep;
      uuid surf_id;
      auto nb_boundary_lines = my_brep.nb_boundaries( surf_id );
    </code>
    <!-- eslint-enable -->

      <p
        :class="paragraph"
      >
        As iteration on BRep Surfaces, it is also possible to iterate on Surface boundary Lines:
      </p>

      <!-- eslint-disable -->
    <code class="example">
      BRep my_brep;
      uuid surf_id;
      const auto& surface = my_brep.surface( surf_id );
      for( const auto& line : my_brep.boundaries( surface ) )
      {
        // do something with line (which is a Line3D)
      }
    </code>
    <!-- eslint-enable -->

      <p :class="paragraph">
        The opposite relation type of <strong>boundary</strong> is named <strong>incidence</strong>
        (depicted by straight brown arrows),
        and the same methods and ranges are available.
      </p>

      <img src="@/assets/datamodel-6.svg">

      <p :class="paragraph">
        Another type of relations is <strong>internal</strong>, and its opposite relation: <strong>embedded</strong>.
        A Component A is internal to a Component B if A is included inside B.
        Internal is different from boundary.
        You can notice that Corners and Lines can be internal Components
        of a Surface (but only Lines can be boundaries of Surfaces).
        Following the same idea, Corners, Lines, and Surfaces can be
        internal Components of Blocks.
      </p>

      <p :class="paragraph">
        The number of relations of a Surface and a Line is used to define
        if it is closed. A Line with no boundary or only one boundary is closed
        (as for the round Line on the right side of the cube).
        A Line with two boundaries is not closed.
        A Line with more than two boundaries is not valid.
        A Surface with no boundaries is closed.
        A Surface with at least one boundary is not closed,
        regardless of the number of internal Components.
      </p>

      <h2 :class="section">
        Collections of Components
      </h2>

      <p :class="paragraph">
        An other kind of relations between Components allows to gather Components into groups.
        This is the notion of
        <strong>Collections</strong>. Components gathered into collections
        are called <strong>items</strong>. For example, the red Surfaces can be gather in a collection
        standing for the right side of the cube.
      </p>

      <img src="@/assets/datamodel-7.svg">

      <p :class="paragraph">
        In the class
        <span v-html="brep" />, there is one type of Collections: ModelBoundaries.
        This collection gathers Surfaces that bind the exterior of the model.
      </p>

      <p :class="paragraph">
        The class
        <span v-html="brep" /> is defined as follows:
      </p>

      <!-- eslint-disable -->
    <code class="example">
      class BRep : public Relationships,
                   public AddComponents< 3, Corners, Lines, Surfaces, Blocks, ModelBoundaries >
      {
        ...
      };
    </code>
    <!-- eslint-enable -->

      <p :class="paragraph">
        As for other relationships, you may get the number of items in a collection,
        iterates on items, etc.
      </p>

      <p :class="paragraph">
        You may define your own Collections to identify Components by making
        groups of Components.
      </p>

      <h2 :class="section">
        Unique indexing of Components mesh vertices
      </h2>

      <p :class="paragraph">
        In a OpenGeode model, each Component mesh has its own set of vertices
        with a continuous indexing. But several vertices from several BRep Component
        meshes may represent a single point in the model (groups of black points on image).
        Model vertex represented by potentially several mesh vertices is called
        <strong>unique vertex</strong>.
      </p>

      <img src="@/assets/datamodel-8.svg">

      <p :class="paragraph">
        The class
        <span v-html="brep" /> also inherits from the class
        <span v-html="vertexIdentifier" />
        that stores this kind of topological information between Components meshes.
        <span
          v-html="vertexIdentifier"
        /> provides methods to request the number of unique
        vertices, to get all the mesh vertices from a unique vertex index, and,
        conversely, get the unique vertex index of a mesh vertex:
      </p>

      <!-- eslint-disable -->
    <code class="example">
      BRep my_brep;
      auto nb_unique_v = my_brep.nb_unique_vertices();
      index_t unique_v_id;
      const auto& mesh_vertices = my_brep.mesh_component_vertices( unique_v_id );
      uuid surf_id;
      const auto& mesh_vertices_in_surface = my_brep.mesh_component_vertices( unique_v_id, surf_id );
    </code>
    <!-- eslint-enable -->

      <p :class="paragraph">
        Notice that all Component mesh vertices are not necessarily identified by
        unique vertices (only a few can be identified).
      </p>

      <p :class="paragraph">
        To simplify inheritance and gather topological information (between
        Components and between Components meshes), OpenGeode provides a class named
        <span
          v-html="topology"
        /> inheriting from both
        <span v-html="relationships" /> and
        <span v-html="vertexIdentifier" />.
      </p>

      <p :class="paragraph">
        Finally, the class
        <span v-html="brep" /> is defined as follows:
      </p>

      <!-- eslint-disable -->
    <code class="example">
      class BRep : public Topology,
                   public AddComponents< 3, Corners, Lines, Surfaces, Blocks, ModelBoundaries >
      {
        ...
      };
    </code>
    <!-- eslint-enable -->

      <h2 :class="section">
        Creating your own models
      </h2>

      <p :class="paragraph">
        At this point, you have learned all the information about
        <span v-html="brep" /> inheritance.
        OpenGeode provides other models, for example:
      </p>

      <!-- eslint-disable -->
    <code class="example">
      class Section : public Topology,
                      public AddComponents< 2, Corners, Lines, Surfaces, ModelBoundaries >
      {
        ...
      };
    </code>
    <!-- eslint-enable -->

      <p :class="paragraph">
        Section is a
        <strong>2</strong>-dimensional model made of Corners, Lines, and Surfaces
        (as mesh Components) and ModelBoundaries as (Collections of Components).
      </p>

      <p :class="paragraph">
        This design based on mixins is fully flexible.
        As a consequence, you are able to build your own OpenGeode
        models following the same design. Let's imagine a world map
        made of Surfaces, Lines, and Corners:
      </p>

      <!-- eslint-disable -->
    <code class="example">
      class WorldMap : public Topology,
                       public AddComponents< 2, Corners, Lines, Surfaces, CountryBorders, Countries, Continents >
      {
        ...
      };
    </code>
    <!-- eslint-enable -->
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    section: 'display-2 ma-5 pa-5',
    paragraph: 'body-1 my-5',
    uuid:
      "<a href='/opengeode?page=struct_geode_uuid.html'><code>uuid</code></a>",
    brep:
      "<a href='/opengeode?page=class_geode_BRep.html'><code>BRep</code></a>",
    surfaces3d:
      "<a href='/opengeode?page=class_geode_Surfaces.html'><code>Surfaces3D</code></a>",
    surface3d:
      "<a href='/opengeode?page=class_geode_Surface.html'><code>Surface3D</code></a>",
    blocks3d:
      "<a href='/opengeode?page=class_geode_Blocks.html'><code>Blocks3D</code></a>",
    block3d:
      "<a href='/opengeode?page=class_geode_Block.html'><code>Block3D</code></a>",
    corners3d:
      "<a href='/opengeode?page=class_geode_Corners.html'><code>Corners3D</code></a>",
    corner3d:
      "<a href='/opengeode?page=class_geode_Corner.html'><code>Corner3D</code></a>",
    lines3d:
      "<a href='/opengeode?page=class_geode_Lines.html'><code>Lines3D</code></a>",
    line3d:
      "<a href='/opengeode?page=class_geode_Line.html'><code>Line3D</code></a>",
    addComponents:
      "<a href='/opengeode?page=class_geode_AddComponents.html'><code>AddComponents</code></a>",
    relationships:
      "<a href='/opengeode?page=class_geode_Relationships.html'><code>Relationships</code></a>",
    vertexIdentifier:
      "<a href='/opengeode?page=class_geode_VertexIdentifier.html'><code>VertexIdentifier</code></a>",
    topology:
      "<a href='/opengeode?page=class_geode_Topology.html'><code>Topology</code></a>"
  })
}
</script>
