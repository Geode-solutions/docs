<template>
  <v-layout column>
    <h1>OpenGeode DataModel</h1>

    <p>
      In this guide, you will learn fundamental elements to understand and manipulate OpenGeode data model.
      One of OpenGeode central classes is
      <code>BRep</code>, let's use this class as an exemple.
    </p>

    <img src="@/assets/datamodel-1.svg" />

    <h2>Manipulating Surfaces</h2>

    <p>
      A
      <code>BRep</code>, for Boundary Representation, represents a 3D object by its boundaries.
      In OpenGeode, these 3D boundaries are
      <code>Surfaces</code> (in grey on images).
      A BRep is thus composed of Surfaces:
      it means that the class
      <code>BRep</code> inherits from the class
      <code>Surfaces3D</code>.
      This allows you to know the number of Surfaces in a
      <code>BRep</code> :
    </p>

    <v-card>
      <v-card-text>
        <p>BRep my_brep;</p>
        <p>auto nb = my_brep.nb_surfaces();</p>
      </v-card-text>
    </v-card>

    <img src="@/assets/datamodel-2.svg" />

    <p>
      To iterate on all the Surfaces of a
      <code>BRep</code>, a range on Surfaces is provided:
    </p>

    <v-card>
      <v-card-text>
        <p>BRep my_brep;</p>
        <p>for(const Surface& surface : my_brep.surfaces() )</p>
        <p>{</p>
        <p style="margin-left: 4em;">// do something with surface</p>
        <p style="margin-left: 4em;">const auto nbv = surface.mesh().nb_vertices();</p>
        <p>}</p>
      </v-card-text>
    </v-card>

    <p>
      Notice that each surface is get using a const reference
      since a
      <code>Surface</code> is not copyable nor modifiable.
    </p>

    <p>
      Now, you may want to process only a single
      <code>Surface</code>.
      Hopefully, it is possible to get one
      <code>Surface</code> from a
      <code>BRep</code>.
      A major feature of OpenGeode is that model components are not continuously numbered:
      they are identified by an unique index
      <code>uuid</code>.
      This is a fondamental design element to allow modification of OpenGeode models.
      You can thus get a
      <code>Surface</code> from its
      <code>uuid</code>:
    </p>

    <v-card>
      <v-card-text>
        <p>BRep my_brep;</p>
        <p>uuid surf_id;</p>
        <p>const auto& surface = my_brep.surface( surf_id );</p>
      </v-card-text>
    </v-card>

    <h2>What about other Components?</h2>

    <p>
      We have seen that
      <code>BRep</code> is composed of
      <code>Surfaces</code>.
      These Surfaces delimit volumes regionalizing an object.
      As a consequence, a
      <code>BRep</code> is also composed of
      <code>Blocks</code>.
      The
      <code>BRep</code> class inherits from
      <code>Surfaces3D</code> and
      <code>Blocks3D</code>.
    </p>

    <v-card>
      <v-card-text>
        <p>class BRep : public Surfaces3D, public Blocks3D</p>
        <p>{</p>
        <p style="margin-left: 4em;">...</p>
        <p>}</p>
      </v-card-text>
    </v-card>

    <p>
      You can count number of Blocks, iterates on Blocks,
      get a specific
      <code>Block</code> from its
      <code>uuid</code> as done for Surfaces.
    </p>

    <img src="@/assets/datamodel-3.svg" />

    <p>
      But as Surfaces bound Blocks, BRep Surfaces are bounded by Lines (in blue),
      and BRep Lines are bounded by Corners (in green). These class are named
      <code>Components</code>.
      The
      <code>BRep</code> class thus inherits from all these classes.
      To ease the conception of custom OpenGeode models, the helper class
      <code>AddComponents</code> is provided.
      The
      <code>BRep</code> class is defined as following:
    </p>

    <img src="@/assets/datamodel-4.svg" />

    <v-card>
      <v-card-text>
        <p>class BRep : public AddComponents< 3, Corners, Lines, Surfaces, Blocks ></p>
        <p>{</p>
        <p style="margin-left: 4em;">...</p>
        <p>}</p>
      </v-card-text>
    </v-card>

    <p>
      In this code,
      <code>3</code> indicates that all
      <code>Corners</code>,
      <code>Lines</code>,
      <code>Surfaces</code> and
      <code>Blocks</code> are 3-dimensional.
    </p>

    <h2>Relationships between Components</h2>

    <p>
      A BRep is composed of several Components and several types of Components.
      There are some relations between Components;
      for example and as mentionned above, Lines are boundaries of Surfaces
      (boundaries are depicted by curved black arrows).
      All these relations between Components are stored in the class
      <code>Relationships</code>.
      <code>BRep</code> inherits from this class.
    </p>

    <img src="@/assets/datamodel-5.svg" />

    <p>
      Methods and ranges are provided to request relationships between Components.
      For example, you can get the number of Lines which are boundaries of a
      given Surface (using its
      <code>uuid</code>):
    </p>

    <v-card>
      <v-card-text>
        <p>BRep my_brep;</p>
        <p>uuid surf_id;</p>
        <p>auto nb_boundary_lines = my_brep.nb_boundaries( surf_id );</p>
      </v-card-text>
    </v-card>

    <p>As iteration on BRep Surfaces, it is also possible to iterate on Surface boundary Lines:</p>

    <v-card>
      <v-card-text>
        <p>BRep my_brep;</p>
        <p>uuid surf_id;</p>
        <p>const auto& surface = my_brep.surface( surf_id );</p>
        <p>for(const Line& line : my_brep.boundaries( surface ) )</p>
        <p>{</p>
        <p style="margin-left: 4em;">// do something with line</p>
        <p>}</p>
      </v-card-text>
    </v-card>

    <p>
      The opposite relation type of boundary is named incidence
      (depicted by straight brown arrows),
      and the same methods and ranges are available.
    </p>

    <img src="@/assets/datamodel-6.svg" />

    <p>
      Another type of relations is internal, and its opposite relation: embedded.
      A Component A is interne to a Component B if A is included inside B.
      Internal is different from boundary.
      You can notice that Corners and Lines can be internal Components
      of a Surface (but only Lines can be boundary of Surfaces).
      Following the same idea, Corners, Lines, and Surfaces can be
      internal Components of Blocks.
    </p>

    <p>
      The number of relations of a Surface and a Line is used to define
      if it is closed. A Line with no boundary or only one boundary is closed
      (as for the round Line on the right side of the cube).
      A Line with two boundaries is not closed.
      A Line with more that two boundaries is not valid.
      A Surface with no boundary is closed.
      A Surface with at least one boundary is not closed,
      regardless of the number of internal Components.
    </p>

    <h2>Collections of Components</h2>

    <p>
      An other kind of relations between Components allows to gather Components into groups.
      This is the notion of
      <code>Collections</code>. Components gathered into collections
      are called items. For example, the red Surfaces can be gather in a collection
      standing for the right side of the cube.
    </p>

    <img src="@/assets/datamodel-7.svg" />

    <p>
      In the class
      <code>BRep</code>, there is one type of Collections: ModelBoundaries.
      This collection gathers Surfaces that bounds the exterior of the model.
    </p>

    <p>
      The class
      <code>BRep</code> is defined as following:
    </p>

    <v-card>
      <v-card-text>
        <p>class BRep : public Relationships,</p>
        <p
          style="margin-left: 4em;"
        >public AddComponents< 3, Corners, Lines, Surfaces, Blocks, ModelBoundaries ></p>
        <p>{</p>
        <p style="margin-left: 4em;">...</p>
        <p>}</p>
      </v-card-text>
    </v-card>

    <p>
      As for other relationships, you may get the number of items in a collection,
      iterates on items, ...
    </p>

    <p>
      You may define your own Collections to identify Components by making
      groups of Components.
    </p>

    <h2>Unique indexing of Components mesh vertices</h2>

    <p>
      In a OpenGeode model, each Component mesh has its own set of vertices
      with a continuous indexing. But several vertices from several BRep Component
      meshes may represent a single point in the model (groups of black points on image).
      Model vertex represented by potentially several mesh vertices is called
      <b>unique vertex</b>.
    </p>

    <img src="@/assets/datamodel-8.svg" />

    <p>
      The class
      <code>BRep</code> also inherits from the class
      <code>VertexIdentifier</code>
      that store this kind of topological information between Components meshes.
      <code>VertexIdentifier</code> provide methods to request the number of unique
      vertices, to get all the mesh vertices from a unique vertex index, and,
      conversely, get the unique vertex index of one mesh vertex:
    </p>

    <v-card>
      <v-card-text>
        <p>BRep my_brep;</p>
        <p>auto nb_unique_v = my_brep.nb_unique_vertices();</p>

        <p>index_t unique_v_id;</p>
        <p>const auto& mesh_vertices = my_brep.mesh_component_vertices( unique_v_id );</p>

        <p>uuid surf_id;</p>
        <p>const auto& mesh_vertices_in_surface = my_brep.mesh_component_vertices( unique_v_id, surf_id );</p>
      </v-card-text>
    </v-card>

    <p>
      Notice that all Component mesh vertices are not necessarily identified by
      unique vertices (only a few can be identified).
    </p>

    <p>
      To simplify inheritance and gather topological information (between
      Components and between Components meshes), OpenGeode provides a class named
      <code>Topology</code> inheriting from both
      <code>Relationships</code> and
      <code>VertexIdentifier</code>.
    </p>

    <p>
      Finally, the class
      <code>BRep</code> is defined as following:
    </p>

    <v-card>
      <v-card-text>
        <p>class BRep : public Topology,</p>
        <p
          style="margin-left: 4em;"
        >public AddComponents< 3, Corners, Lines, Surfaces, Blocks, ModelBoundaries ></p>
        <p>{</p>
        <p style="margin-left: 4em;">...</p>
        <p>}</p>
      </v-card-text>
    </v-card>

    <h2>Creating your own models</h2>

    <p>
      At this point, you learn all the information about
      <code>BRep</code> inheritance.
      OpenGeode provides other models, for example:
    </p>

    <v-card>
      <v-card-text>
        <p>class Section : public Topology,</p>
        <p
          style="margin-left: 4em;"
        >public AddComponents< 2, Corners, Lines, Surfaces, ModelBoundaries ></p>
        <p>{</p>
        <p style="margin-left: 4em;">...</p>
        <p>}</p>
      </v-card-text>
    </v-card>

    <p>
      Section is a
      <code>2</code>-dimensional model made of Corners, Lines, and Surfaces
      (as mesh Components) and ModelBoundaries as (Collections of Components).
    </p>

    <p>
      This design based on mixins is fully flexible.
      As a consequence, you are able to build your own OpenGeode
      models following the same design. Let's imagine a world map
      made of Surfaces, Lines, and Corners:
    </p>

    <v-card>
      <v-card-text>
        <p>class WorldMap : public Topology,</p>
        <p
          style="margin-left: 4em;"
        >public AddComponents< 2, Corners, Lines, Surfaces, CountryBorders, Countries, Continents ></p>
        <p>{</p>
        <p style="margin-left: 4em;">...</p>
        <p>}</p>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {}
</script>

<style>
</style> 
