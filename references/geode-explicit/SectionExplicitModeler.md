# class SectionExplicitModeler

```cpp
Defined at ../include/geode/explicit/section/section_explicit_modeler.h#24
```

## Records

Impl



## Functions

### SectionExplicitModeler

```cpp
public void SectionExplicitModeler(const SectionExplicitModeler & )
```

```cpp
Defined at ../include/geode/explicit/section/section_explicit_modeler.h#26
```

### operator=

```cpp
public SectionExplicitModeler & operator=(const SectionExplicitModeler & )
```

```cpp
Defined at ../include/geode/explicit/section/section_explicit_modeler.h#26
```

### SectionExplicitModeler

```cpp
public void SectionExplicitModeler(BoundingBox2D bbox)
```

```cpp
Defined at /github/workspace/src/geode/explicit/section/section_explicit_modeler.cpp#249
```

### ~SectionExplicitModeler

```cpp
public void ~SectionExplicitModeler()
```

```cpp
Defined at /github/workspace/src/geode/explicit/section/section_explicit_modeler.cpp#254
```

### select_curve_to_insert

```cpp
public void select_curve_to_insert(const EdgedCurve2D & mesh)
```

```cpp
Defined at /github/workspace/src/geode/explicit/section/section_explicit_modeler.cpp#258
```

### insert_and_build

```cpp
public std::tuple<Section, ModelGenericMapping> insert_and_build()
```

```cpp
Defined at /github/workspace/src/geode/explicit/section/section_explicit_modeler.cpp#264
```

 Returns the Merged Section including all the added curves and gives the "input to output" and "output to input" mappings between Lines



