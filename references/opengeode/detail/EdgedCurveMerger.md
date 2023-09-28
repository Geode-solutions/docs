# class EdgedCurveMerger

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/curve_merger.cpp#214
```

```cpp
Inherits from VertexMerger<EdgedCurve<3U> >
```



# class EdgedCurveMerger

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/curve_merger.cpp#213
```

```cpp
Inherits from VertexMerger<EdgedCurve<2U> >
```



# class EdgedCurveMerger

```cpp
Defined at ../../include/geode/mesh/helpers/detail/curve_merger.h#44
```

```cpp
Inherits from VertexMerger<EdgedCurve<dimension> >
```



## Records

EdgeOrigin



## Functions

### EdgedCurveMerger

```cpp
public void EdgedCurveMerger<dimension>(absl::Span<const std::reference_wrapper<const EdgedCurve<dimension> > > curves, double epsilon)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/curve_merger.cpp#177
```

### ~EdgedCurveMerger

```cpp
public void ~EdgedCurveMerger<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/curve_merger.cpp#187
```

### merge

```cpp
public std::unique_ptr<EdgedCurve<dimension> > merge()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/curve_merger.cpp#192
```

### edge_in_merged

```cpp
public index_t edge_in_merged(index_t curve, index_t edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/curve_merger.cpp#199
```

### edge_origins

```cpp
public const EdgeOrigins & edge_origins(index_t edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/curve_merger.cpp#206
```



