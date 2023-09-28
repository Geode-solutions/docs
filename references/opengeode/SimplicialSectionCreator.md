# class SimplicialSectionCreator

```cpp
Defined at ../../include/geode/model/helpers/simplicial_section_creator.h#43
```

## Functions

### SimplicialSectionCreator

```cpp
public void SimplicialSectionCreator(Section & brep, vector unique_points)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/simplicial_section_creator.cpp#65
```

### ~SimplicialSectionCreator

```cpp
public void ~SimplicialSectionCreator()
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/simplicial_section_creator.cpp#71
```

### create_corners

```cpp
public vector create_corners(Span definitions)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/simplicial_section_creator.cpp#73
```

### create_lines

```cpp
public vector create_lines(Span corners, Span definitions)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/simplicial_section_creator.cpp#79
```

### create_surfaces

```cpp
public vector create_surfaces(Span lines, Span definitions)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/simplicial_section_creator.cpp#86
```

### create_surfaces

```cpp
public vector create_surfaces(Span corners, Span lines, Span definitions)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/simplicial_section_creator.cpp#93
```

### create_model_boundaries

```cpp
public vector create_model_boundaries(Span lines, Span definitions)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/simplicial_section_creator.cpp#101
```



