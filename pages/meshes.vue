<template>
  <v-layout column>
    <h1 class="display-4 ma-5">Meshes</h1>

    <p :class="paragraph">
      In this guide, you will learn fundamental elements to understand and manipulate meshes in OpenGeode.
      Let's begin by introducing all kind of meshes you can work with in OpenGeode.
    </p>

    <h2 :class="section">Mesh gallery</h2>

    <p
      :class="paragraph"
    >There are several kind of meshes representing points, lines, surfaces and solids.</p>

    <img src="@/assets/mesh_hierarchy.svg" />

    <p :class="paragraph">
      All these meshes are available in 2D and 3D
      (excepted solids that are definitely three-dimensional, and graphs that are dimensionless).
      The dimension is given by a template parameter. Aliases are defined such as TriangulatedSurface2D and TriangulatedSurface3D.
    </p>

    <!-- eslint-disable -->
    <!-- <code class="cpp primary--text">
      BRep my_brep;
      auto nb = my_brep.nb_surfaces();
    </code>-->
    <!-- eslint-enable -->

    <h2 :class="section">Mesh definitions</h2>

    <p :class="paragraph">
      We will take the example of a PolygonalSurface mesh to give some definitions on meshes
      and to show how to manipulate meshes.
      Potential differences with other kind of meshes will be pointed if necessary.
    </p>

    <img src="@/assets/mesh_surface-1.svg" />

    <p :class="paragraph">Let's take the above polygonal mesh as the example.</p>

    <h3 :class="subsection">Vertices and Polygons</h3>

    <p
      :class="paragraph"
    >This PolygonalSurface is defined by 11 vertices (left) and 6 polygons (right) as shown on this image.</p>

    <img src="@/assets/mesh_surface-2.svg" />

    <p :class="paragraph">
      Indexing of vertices is continuous, starts at
      <code>0</code> and ends at
      <code>number of vertices - 1</code>. It is exactly the same of polygon indexing.
    </p>

    <p
      :class="paragraph"
    >To known the number of vertices and the polygons, use the following methods:</p>
    <!-- eslint-disable -->
    <code class="cpp primary--text">
      PolygonalSurface2D surface;
      const auto nbv = surface.nb_vertices();
      const auto nbp = surface.nb_polygons();
    </code>
    <!-- eslint-enable -->

    <p :class="paragraph">
      Polygons are defined by an ordered list of vertices.
      For example, the first polygon (with index 0) is defined by vertices: 6, 5, 8, 9, 10.
      It is easy to get the index of vertices defining a polygon using:
    </p>

    <!-- eslint-disable -->
    <code class="cpp primary--text">
      PolygonalSurface2D surface;
      const auto pv0 = surface.polygon_vertex( {0, 0} ); // 6
      const auto pv1 = surface.polygon_vertex( {0, 0} ); // 5
      const auto pv2 = surface.polygon_vertex( {0, 0} ); // 8
      ...
    </code>
    <!-- eslint-enable -->

    <img src="@/assets/mesh_surface-3.svg" />

    <p :class="paragraph">
      This is called
      <strong>PolygonVertex</strong>.
    </p>

    <p :class="nb">
      NB: For Solid, this is called
      <strong>PolyhedronVertex</strong>.
    </p>

    <h3 :class="subsection">Edges and Facets</h3>

    <p :class="paragraph">
      Even if meshes are entirely defined by vertices and polygons,
      you can access to mesh facets and edges.
      Edges are defined for Surfaces and Solids and facets for Solids.
      As for vertices and polygons, edge and facet indexings are continuous and starts at 0.
      If the example, the polygonal surface is composed of 16 edges indexed from 0 to 15.
    </p>

    <img src="@/assets/mesh_surface-4.svg" />

    <p :class="paragraph">
      As for vertices, it is possible to have access to the global index of a polygon edge.
      A PolygonEdge is the edge that starts from the same PolygonVertex:
      PolygonEdge (2, 1) is an edge of the polygon 2 that starts from the Polygonvertex (2, 1).
    </p>

    <img src="@/assets/mesh_surface-5.svg" />

    <p :class="nb">
      NB: For Solid, there is
      <strong>PolyhedronFacet</strong>,
      <strong>PolyhedronEdge</strong> and
      <strong>PolyhedronFacetEdge</strong>.
    </p>

    <h3 :class="subsection">Topological queries</h3>
    <p :class="paragraph">
      Meshes provide numerous methods to query the mesh topology.
      One information you can get is to know which polygon is adjacent to another one.
      More precisely, to known which polygon is adjacent to another one through a given PolygonEdge,
      you can use the following code:
    </p>

    <!-- eslint-disable -->
    <code class="cpp primary--text">
      PolygonalSurface2D surface;
      const auto polygon = surface.polygon_adjacent( {0, 0} ); // 1
    </code>
    <!-- eslint-enable -->

    <img src="@/assets/mesh_surface-6.svg" />

    <p
      :class="paragraph"
    >You can have more information and get the adjacent PolygonEdge, using the following code:</p>

    <!-- eslint-disable -->
    <code class="cpp primary--text">
      PolygonalSurface2D surface;
      const auto polygon = surface.polygon_adjacent_edge( {0, 0} ); // {1, 2}
    </code>
    <!-- eslint-enable -->

    <p :class="paragraph">
      If there is no polygon adjacent to the given PolygonEdge,
      the results of these methods are
      <code>NO_ID</code> or the PolygonEdge
      <code>{NO_ID, NO_ID}</code>. The given PolygonEdge is on border.
      There is a method to known if a PolygonEdge is on border:
    </p>

    <!-- eslint-disable -->
    <code class="cpp primary--text">
      PolygonalSurface2D surface;
      const auto on_border0 = surface.is_edge_on_border( {0, 0} ); // false
      const auto on_border1 = surface.is_edge_on_border( {0, 2} ); // true
    </code>
    <!-- eslint-enable -->

    <img src="@/assets/mesh_surface-7.svg" />

    <p :class="paragraph">You can go from one edge on border to anther one using:</p>

    <!-- eslint-disable -->
    <code class="cpp primary--text">
      PolygonalSurface2D surface;
      PolygonEdge start{0, 2};
      auto next_edge = surface.next_on_border( next_edge ); // {0, 3}
      next_edge = surface.next_on_border( next_edge ); // {0, 4}
      next_edge = surface.next_on_border( next_edge ); // {1, 0}
      auto prev_edge = surface.previous_on_border( next_edge ); // {0, 4}
      ...
    </code>
    <!-- eslint-enable -->

    <p :class="paragraph">
      You can notice that "next" turns in the same direction that polygon vertices,
      and "previous" turns therefore in the inverse direction.
    </p>

    <p
      :class="paragraph"
    >You will fail an assertion if you give as method parameter a PolygonEdge that is not on border.</p>

    <p :class="paragraph">Another topological query is to get the polygon list around a vertex:</p>

    <!-- eslint-disable -->
    <code class="cpp primary--text">
      PolygonalSurface2D surface;
      const auto polygons_around4 = surface.polygons_around( 4 ); // an inlined vector containing {4, 3, 1, 2, 5}
    </code>
    <!-- eslint-enable -->

    <img src="@/assets/mesh_surface-8.svg" />

    <h3 :class="subsection">Geometrical queries</h3>
    <p :class="paragraph">
      Beside topological queries, you also can ask for geometrical mesh queries
      such as polygon area, edge length, polygon barycenter and so on.
    </p>

    <p :class="paragraph">You can get the (axis-aligned) bounding box of a mesh using:</p>

    <!-- eslint-disable -->
    <code class="cpp primary--text">
      PolygonalSurface2D surface;
      const auto bbox = surface.bounding_box();
    </code>
    <!-- eslint-enable -->

    <img src="@/assets/mesh_surface-9.svg" />

    <h2 :class="section">Manipulating meshes</h2>
    <p :class="paragraph">
      All the queries illustrated above are const mesh methods.
      As a consequence, you can work with a const mesh and have access to all information you want.
      But if you want to create or modify a mesh, you should use a builder as explained in the following guide.
    </p>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    section: 'display-2 ma-5 pa-5',
    subsection: 'display-1 mx-10 px-10',
    paragraph: 'body-1 my-5',
    nb: 'body-2 my-5',
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

<style>
.cpp {
  background-color: #ffffff !important;
}
</style> 
