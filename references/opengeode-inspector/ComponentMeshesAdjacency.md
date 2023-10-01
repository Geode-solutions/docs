# class ComponentMeshesAdjacency

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/private/component_meshes_adjacency.cpp#116
```

# class ComponentMeshesAdjacency

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/private/component_meshes_adjacency.cpp#118
```

# class ComponentMeshesAdjacency

```cpp
Defined at ../include/geode/inspector/criterion/private/component_meshes_adjacency.h#43
```

 Class for inspecting the adjacency of edges in the Component Meshes of a Model (BRep or Section).



## Functions

### ComponentMeshesAdjacency

```cpp
public void ComponentMeshesAdjacency<dimension, Model>(const ComponentMeshesAdjacency<dimension, Model> & )
```

```cpp
Defined at ../include/geode/inspector/criterion/private/component_meshes_adjacency.h#45
```

### operator=

```cpp
public ComponentMeshesAdjacency<dimension, Model> & operator=(const ComponentMeshesAdjacency<dimension, Model> & )
```

```cpp
Defined at ../include/geode/inspector/criterion/private/component_meshes_adjacency.h#45
```

### surfaces_with_wrong_adjacencies

```cpp
public vector surfaces_with_wrong_adjacencies()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/private/component_meshes_adjacency.cpp#45
```

### surfaces_nb_edges_with_wrong_adjacencies

```cpp
public flat_hash_map surfaces_nb_edges_with_wrong_adjacencies()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/private/component_meshes_adjacency.cpp#62
```

### surfaces_edges_with_wrong_adjacencies

```cpp
public flat_hash_map surfaces_edges_with_wrong_adjacencies()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/private/component_meshes_adjacency.cpp#82
```

### ComponentMeshesAdjacency

```cpp
protected void ComponentMeshesAdjacency<dimension, Model>(const Model & model, bool verbose)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/private/component_meshes_adjacency.cpp#38
```

### model

```cpp
protected const Model & model()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/private/component_meshes_adjacency.cpp#104
```

### verbose

```cpp
protected bool verbose()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/private/component_meshes_adjacency.cpp#110
```



