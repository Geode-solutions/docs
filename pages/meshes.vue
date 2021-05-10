<template>
  <v-row>
    <v-col>
      <h1 class="display-4 ma-5">
        Meshes
      </h1>

      <p :class="paragraph">
        In this guide, you will learn fundamental elements to understand and manipulate meshes in OpenGeode.
        Let's begin by introducing all kind of meshes you can work with in OpenGeode.
      </p>

      <h2 :class="section">
        Mesh gallery
      </h2>

      <p
        :class="paragraph"
      >
        There are several kind of meshes representing points, lines, surfaces and solids.
      </p>

      <img src="@/assets/mesh_hierarchy.svg">

      <p :class="paragraph">
        All these meshes are available in 2D and 3D
        (excepted solids that are definitely three-dimensional, and vertex sets and graphs that are dimensionless).
        The dimension is given by a template parameter. For example, two aliases are defined for 
        <span v-html="triangulatedSurface" />: 
        <strong>TriangulatedSurface2D</strong> and <strong>TriangulatedSurface3D</strong>.
      </p>

      <h2 :class="section">
        Mesh definitions
      </h2>

      <p :class="paragraph">
        We will take the example of a 
        <span v-html="polygonalSurface" />
        mesh to give some definitions on meshes
        and to show how to manipulate meshes.
        Potential differences with other kind of meshes will be pointed if necessary.
      </p>

      <img src="@/assets/mesh_surface-1.svg">

      <p :class="paragraph">
        Let's take the above polygonal mesh as the example.
      </p>

      <h3 :class="subsection">
        Vertices and Polygons
      </h3>

      <p
        :class="paragraph"
      >
        This 
        <span v-html="polygonalSurface" /> 
        is defined by 11 vertices (left) and 6 polygons (right) as shown on this image.
      </p>

      <img src="@/assets/mesh_surface-2.svg">

      <p :class="paragraph">
        Indexing of vertices is continuous, starts at
        <code>0</code> and ends at
        <code>number of vertices - 1</code>. It is exactly the same of polygon indexing.
      </p>

      <p
        :class="paragraph"
      >
        To known the number of vertices and the polygons, use the following methods:
      </p>
      <!-- eslint-disable -->
    <code class="example">
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
    <code class="example">
      PolygonalSurface2D surface;
      const auto pv0 = surface.polygon_vertex( {0, 0} ); // 6
      const auto pv1 = surface.polygon_vertex( {0, 1} ); // 5
      const auto pv2 = surface.polygon_vertex( {0, 2} ); // 8
      ...
    </code>
    <!-- eslint-enable -->

      <img src="@/assets/mesh_surface-3.svg">

      <p :class="paragraph">
        This is called
        <span v-html="polygonVertex" />.
      </p>

      <p :class="nb">
        NB: For Solid, this is called
        <span v-html="polyhedronVertex" />.
      </p>

      <h3 :class="subsection">
        Edges and Facets
      </h3>

      <p :class="paragraph">
        Even if meshes are entirely defined by vertices and polygons,
        you can access to mesh facets and edges.
        Edges are defined for Surfaces and Solids and facets for Solids.
        All edges and facets methods are accessible using the <code>surface.edges()</code> or <code>solid.facets()</code> getters.
        As for vertices and polygons, edge and facet indexings are continuous and starts at 0.
      </p>

      <p :class="nb">
        This feature is optional and disabled by default. 
        To enable it: <code>surface.enable_edges();</code>
      </p>

      <p :class="paragraph">
        In the example, the polygonal surface is composed of 16 edges indexed from 0 to 15.
      </p>

      <img src="@/assets/mesh_surface-4.svg">

      <!-- eslint-disable -->
    <code class="example">
      PolygonalSurface2D surface;
      surface.enable_edges();
      const auto nbe = surfaces.edges().nb_edges();
      const auto vertices = surfaces.edges().edge_vertices( 3 ); // [4, 5]
      const auto edge = surface.edges().edge_from_vertices( {8, 0} ); // 1
    </code>
    <!-- eslint-enable -->
    
      <p :class="paragraph">
        As for vertices, it is possible to have access to the global index of a polygon edge.
        A <span v-html="polygonEdge" /> is the edge that starts from the same <span v-html="polygonVertex" />:
        <span v-html="polygonEdge" /> (2, 1) is an edge of the polygon 2 that starts from the <span v-html="polygonVertex" /> (2, 1).
      </p>

      <img src="@/assets/mesh_surface-5.svg">

      <p :class="nb">
        NB: For Solid, there are
        <span v-html="polyhedronFacet" /> and
        <span v-html="polyhedronFacetEdge" />.
      </p>

      <h3 :class="subsection">
        Topological queries
      </h3>
      <p :class="paragraph">
        Meshes provide numerous methods to query the mesh topology.
        One information you can get is to know which polygon is adjacent to another one.
        More precisely, to known which polygon is adjacent to another one through a given <span v-html="polygonEdge" />,
        you can use the following code:
      </p>

      <!-- eslint-disable -->
    <code class="example">
      PolygonalSurface2D surface;
      const auto polygon = surface.polygon_adjacent( {0, 0} ); // 1
    </code>
    <!-- eslint-enable -->

      <img src="@/assets/mesh_surface-6.svg">

      <p
        :class="paragraph"
      >
        You can have more information and get the adjacent <span v-html="polygonEdge" />, using the following code:
      </p>

      <!-- eslint-disable -->
    <code class="example">
      PolygonalSurface2D surface;
      const auto polygon = surface.polygon_adjacent_edge( {0, 0} ); // {1, 2}
    </code>
    <!-- eslint-enable -->

      <p :class="paragraph">
        If there is no polygon adjacent to the given <span v-html="polygonEdge" />,
        the results of these methods are empty optionals. 
        The given <span v-html="polygonEdge" /> is on border.
        There is a method to known if a <span v-html="polygonEdge" /> is on border:
      </p>

      <!-- eslint-disable -->
    <code class="example">
      PolygonalSurface2D surface;
      const auto on_border0 = surface.is_edge_on_border( {0, 0} ); // false
      const auto on_border1 = surface.is_edge_on_border( {0, 2} ); // true
    </code>
    <!-- eslint-enable -->

      <img src="@/assets/mesh_surface-7.svg">

      <p :class="paragraph">
        You can go from one edge on border to anther one using:
      </p>

      <!-- eslint-disable -->
    <code class="example">
      PolygonalSurface2D surface;
      PolygonEdge start{0, 2};
      auto next_edge = surface.next_on_border( start ); // {0, 3}
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
      >
        An exception is raised if you give as method parameter a <span v-html="polygonEdge" /> that is not on border.
      </p>

      <p :class="paragraph">
        Another topological query is to get the polygon list around a vertex:
      </p>

      <!-- eslint-disable -->
    <code class="example">
      PolygonalSurface2D surface;
      const auto polygons_around4 = surface.polygons_around( 4 ); // an inlined vector containing {4, 3, 1, 2, 5}
    </code>
    <!-- eslint-enable -->

      <img src="@/assets/mesh_surface-8.svg">

      <h3 :class="subsection">
        Geometrical queries
      </h3>
      <p :class="paragraph">
        Beside topological queries, you also can ask for geometrical mesh queries
        such as polygon area, edge length, polygon barycenter and so on.
      </p>

      <p :class="paragraph">
        You can get the (axis-aligned) bounding box of a mesh using:
      </p>

      <!-- eslint-disable -->
    <code class="example">
      PolygonalSurface2D surface;
      const auto bbox = surface.bounding_box();
    </code>
    <!-- eslint-enable -->

      <img src="@/assets/mesh_surface-9.svg">

      <h2 :class="section">
        Manipulating meshes
      </h2>
      <p :class="paragraph">
        All the queries illustrated above are const mesh methods.
        As a consequence, you can work with a const mesh and have access to all information you want.
        But if you want to create or modify a mesh, you should use a builder as explained in the following guide.
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    section: 'display-2 ma-5 pa-5',
    subsection: 'display-1 mx-10 px-10',
    paragraph: 'body-1 my-5',
    nb: 'secondary font-italic body-1 pa-5',
    polygonVertex:
      "<a href='/opengeode?page=struct_geode_PolygonVertex.html'><code>PolygonVertex</code></a>",
    polygonEdge:
      "<a href='/opengeode?page=struct_geode_PolygonEdge.html'><code>PolygonEdge</code></a>",
    polyhedronVertex:
      "<a href='/opengeode?page=struct_geode_PolyhedronVertex.html'><code>PolyhedronVertex</code></a>",
    polyhedronFacet:
      "<a href='/opengeode?page=struct_geode_PolyhedronFacet.html'><code>PolyhedronFacet</code></a>",
    polyhedronFacetEdge:
      "<a href='/opengeode?page=struct_geode_PolyhedronFacetEdge.html'><code>PolyhedronFacetEdge</code></a>",
    triangulatedSurface:
      "<a href='/opengeode?page=class_geode_TriangulatedSurface.html'><code>TriangulatedSurface</code></a>",
    polygonalSurface:
      "<a href='/opengeode?page=class_geode_PolygonalSurface.html'><code>PolygonalSurface</code></a>",
  })
}
</script>
