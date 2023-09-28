# class BackgroundSolidPainter

```cpp
Defined at ../include/geode/background/solid/private/background_solid_painter.h#28
```

## Functions

### BackgroundSolidPainter

```cpp
public void BackgroundSolidPainter(BackgroundSolid & background)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_painter.cpp#292
```

### ~BackgroundSolidPainter

```cpp
public void ~BackgroundSolidPainter()
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_painter.cpp#298
```

### paint_volume

```cpp
public void paint_volume(const uuid & volume_uuid, absl::Span<const uuid> bounding_surface_uuids, absl::Span<const std::pair<std::reference_wrapper<const TriangulatedSurface3D>, bool> > oriented_surfaces)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_painter.cpp#302
```

 Paints the given uuid on the component volumes of the tetrahedra inside the given surfaces. The boolean associated to the oriented surfaces gives if the surface is oriented towards the volume (true) or not (false).



