# class BackgroundBRepModifier


```cpp
```cpp
Inherits from BackgroundBRepBuilder, BRepGeometricModifier
```
```



## Functions

### BackgroundBRepModifier

```cpp
```cpp
public void BackgroundBRepModifier(BackgroundBRep & background_brep)
```
```


### ~BackgroundBRepModifier

```cpp
```cpp
public void ~BackgroundBRepModifier()
```
```


### split_tetrahedron

```cpp
```cpp
public BRepSplitTetrahedronInfo split_tetrahedron(const Block3D & block, index_t tetrahedron, const Point3D & point)
```
```


### split_triangle

```cpp
```cpp
public BRepSplitTriangleInfo split_triangle(const Block3D & block, const PolyhedronFacet & facet, const Point3D & point)
```
```


### split_triangle

```cpp
```cpp
public BRepSplitTriangleInfo split_triangle(const Surface3D & surface, index_t triangle, const Point3D & point)
```
```


### split_edge

```cpp
```cpp
public BRepSplitPolygonEdgeInfo split_edge(const Block3D & block, const PolyhedronFacetEdge & edge, const Point3D & point)
```
```


### split_edge

```cpp
```cpp
public BRepSplitPolygonEdgeInfo split_edge(const Surface3D & surface, const PolygonEdge & edge, const Point3D & point)
```
```


### split_edge

```cpp
```cpp
public BRepSplitPolygonEdgeInfo split_edge(const Line3D & line, index_t edge, const Point3D & point)
```
```


### collapse_edge

```cpp
```cpp
public BRepCollapsePolygonEdgeInfo collapse_edge(const Block3D & block, const PolyhedronFacetEdge & edge, const Point3D & point)
```
```


### collapse_edge

```cpp
```cpp
public BRepCollapsePolygonEdgeInfo collapse_edge(const Surface3D & surface, const PolygonEdge & edge, const Point3D & point)
```
```


### collapse_edge

```cpp
```cpp
public BRepCollapsePolygonEdgeInfo collapse_edge(const Line3D & line, index_t edge, const Point3D & point)
```
```


### clean_background_brep

```cpp
```cpp
public CleanMappings clean_background_brep()
```
```



