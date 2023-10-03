# class StratigraphicSectionBuilder

```cpp
Defined at ../include/geode/geosciences/implicit/representation/builder/stratigraphic_section_builder.h#43
```

 Class managing modifications of a StratigraphicSection



```cpp
Inherits from ImplicitCrossSectionBuilder
```



## Functions

### StratigraphicSectionBuilder

```cpp
public void StratigraphicSectionBuilder(StratigraphicSection & stratigraphic_section)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/stratigraphic_section_builder.cpp#35
```

### copy

```cpp
public ModelCopyMapping copy(const StratigraphicSection & stratigraphic_section)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/stratigraphic_section_builder.cpp#42
```

### reinitialize_stratigraphic_query_trees

```cpp
public void reinitialize_stratigraphic_query_trees()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/stratigraphic_section_builder.cpp#51
```

### instantiate_stratigraphic_attribute_on_surfaces

```cpp
public void instantiate_stratigraphic_attribute_on_surfaces()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/stratigraphic_section_builder.cpp#57
```

### set_stratigraphic_location

```cpp
public void set_stratigraphic_location(const Surface2D & surface, index_t vertex_id, Point value)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/stratigraphic_section_builder.cpp#65
```

### set_stratigraphic_coordinates

```cpp
public void set_stratigraphic_coordinates(const Surface2D & surface, index_t vertex_id, const StratigraphicPoint2D & value)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/stratigraphic_section_builder.cpp#72
```



