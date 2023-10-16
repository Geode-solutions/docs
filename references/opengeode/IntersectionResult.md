# struct IntersectionResult


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


### IntersectionResult

```cpp
public void IntersectionResult<Intersection>(IntersectionType intersection_type)
```


### has_intersection

```cpp
public bool has_intersection()
```


### operator bool

```cpp
public bool operator bool()
```




