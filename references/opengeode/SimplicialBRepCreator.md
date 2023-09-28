# class SimplicialBRepCreator

```cpp
Defined at ../../include/geode/model/helpers/simplicial_brep_creator.h#43
```

## Functions

### SimplicialBRepCreator

```cpp
public void SimplicialBRepCreator(BRep & brep, vector unique_points)
```

### ~SimplicialBRepCreator

```cpp
public void ~SimplicialBRepCreator()
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/simplicial_brep_creator.cpp#142
```

### create_corners

```cpp
public vector create_corners(Span definitions)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/simplicial_brep_creator.cpp#144
```

### create_lines

```cpp
public vector create_lines(Span corners, Span definitions)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/simplicial_brep_creator.cpp#150
```

### create_surfaces

```cpp
public vector create_surfaces(Span lines, Span definitions)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/simplicial_brep_creator.cpp#157
```

### create_surfaces

```cpp
public vector create_surfaces(Span corners, Span lines, Span definitions)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/simplicial_brep_creator.cpp#164
```

### create_blocks

```cpp
public vector create_blocks(Span surfaces, Span definitions)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/simplicial_brep_creator.cpp#172
```

### create_blocks

```cpp
public vector create_blocks(Span corners, Span lines, Span surfaces, Span definitions)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/simplicial_brep_creator.cpp#179
```

### create_model_boundaries

```cpp
public vector create_model_boundaries(Span surfaces, absl::Span<const BoundaryDefinition> definitions)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/simplicial_brep_creator.cpp#188
```

### SimplicialBRepCreator

```cpp
public void SimplicialBRepCreator(BRep & brep, int unique_points)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/simplicial_brep_creator.cpp#136
```



