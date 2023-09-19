# struct PolyhedronFacetVertex


## Members

```cpp
public PolyhedronFacet polyhedron_facet
```

```cpp
public local_index_t vertex_id
```



## Functions

### PolyhedronFacetVertex

```cpp
public void PolyhedronFacetVertex()
```


### PolyhedronFacetVertex

```cpp
public void PolyhedronFacetVertex(PolyhedronFacet facet, local_index_t vertex_id_in)
```


### operator==

```cpp
public _Bool operator==(const PolyhedronFacetVertex & other)
```


### operator!=

```cpp
public _Bool operator!=(const PolyhedronFacetVertex & other)
```


### operator<

```cpp
public _Bool operator<(const PolyhedronFacetVertex & other)
```


### string

```cpp
public basic_string string()
```


### serialize

```cpp
public void serialize(Archive & archive)
```




