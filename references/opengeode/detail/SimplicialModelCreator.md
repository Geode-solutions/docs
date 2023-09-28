# class SimplicialModelCreator

```cpp
Defined at ../../include/geode/model/helpers/private/simplicial_model_creator.h#47
```

## Functions

### SimplicialModelCreator

```cpp
public void SimplicialModelCreator<Model>(Model & model, std::vector<Point<dimension> > unique_points)
```

```cpp
Defined at ../../include/geode/model/helpers/private/simplicial_model_creator.h#53
```

### create_corners

```cpp
public vector create_corners(Span definitions)
```

```cpp
Defined at ../../include/geode/model/helpers/private/simplicial_model_creator.h#62
```

### create_lines

```cpp
public vector create_lines(Span corners, Span definitions)
```

```cpp
Defined at ../../include/geode/model/helpers/private/simplicial_model_creator.h#79
```

### create_surfaces

```cpp
public vector create_surfaces(Span lines, Span definitions)
```

```cpp
Defined at ../../include/geode/model/helpers/private/simplicial_model_creator.h#110
```

### create_surfaces

```cpp
public vector create_surfaces(Span corners, Span lines, Span definitions)
```

```cpp
Defined at ../../include/geode/model/helpers/private/simplicial_model_creator.h#150
```

### create_point

```cpp
protected void create_point(MeshBuilder & mesh_builder, const Component & component, index_t vertex)
```

```cpp
Defined at ../../include/geode/model/helpers/private/simplicial_model_creator.h#171
```

### model

```cpp
protected const Model & model()
```

```cpp
Defined at ../../include/geode/model/helpers/private/simplicial_model_creator.h#181
```

### builder

```cpp
protected ModelBuilder & builder()
```

```cpp
Defined at ../../include/geode/model/helpers/private/simplicial_model_creator.h#186
```



