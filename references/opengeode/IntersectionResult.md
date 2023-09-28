# struct IntersectionResult

```cpp
Defined at ../../include/geode/geometry/intersection.h#73
```

## Members

```cpp
public absl::optional<Intersection> result

```

```cpp
public IntersectionType type

```

```cpp
public absl::optional<CorrectnessInfo<Intersection> > correctness

```



## Functions

### IntersectionResult

```cpp
public void IntersectionResult<Intersection>(Intersection intersection, CorrectnessInfo<Intersection> correctness_info)
```

```cpp
Defined at ../../include/geode/geometry/intersection.h#75
```

### IntersectionResult

```cpp
public void IntersectionResult<Intersection>(IntersectionType intersection_type)
```

```cpp
Defined at ../../include/geode/geometry/intersection.h#86
```

### has_intersection

```cpp
public bool has_intersection()
```

```cpp
Defined at ../../include/geode/geometry/intersection.h#91
```

### operator bool

```cpp
public bool operator bool()
```

```cpp
Defined at ../../include/geode/geometry/intersection.h#96
```



