# HVAC Hero Image Composition Contract

## Purpose

This document defines the composition spec for hero images used in the HVAC template. It serves as a prompt template for AI image generation or a shot list for on-site photography.

## Default Composition

Split-screen layout. The subject occupies 50-60% of the frame on one side. The remaining space is reserved for text overlay (headline, subtext, CTA button).

The text side receives a dark gradient overlay: navy (#1B2A4A) at 60-70% opacity, fading to transparent across the image.

## Subject Options

### Option A: Technician at Work (Priority 1)

A uniformed HVAC technician working on residential equipment. Clean company shirt with a visible name badge. Professional posture. Engaged in the task, not looking at the camera.

Setting: Beside an outdoor AC condenser at a clean residential property, or beside a furnace in a well-lit utility room.

Hands visible and active. Tools in hand or on a nearby toolbox. No staged "thumbs up" poses.

### Option B: Comfortable Family (Priority 2)

A family relaxed at home. Natural expressions. Living room or kitchen setting with warm, comfortable lighting. The feeling should communicate "this home has good air."

No one is visibly sweating or shivering. The comfort is implicit, not performed.

### Option C: Technician with Homeowner (Priority 3)

A technician explaining something to a homeowner near the equipment. The technician holds a clipboard or tablet. The homeowner listens with a relaxed, trusting expression. Eye contact between them.

This communicates transparency and the "we explain before we work" promise.

## Lighting

Warm natural light. Color temperature 5500K to 6000K. Side lighting or three-quarter front lighting. No harsh overhead fluorescents. No deep shadows on faces.

For outdoor shots: golden hour or open shade. Not direct midday sun.

For indoor shots: practical lighting supplemented to avoid dark spots. The space should feel bright and clean.

## Camera Spec

- Focal length: 35-50mm equivalent. Wide enough for context, tight enough for subject detail.
- Aperture: f/2.8 to f/4. Shallow depth of field on background. Subject sharp.
- Eye-level or slightly below. Never shoot down on the subject.

## Region Defaults

| Region | Setting Cues |
|---|---|
| US South | Outdoor AC unit visible. Green lawn. Warm-weather clothing. |
| US North | Indoor furnace setting. Winter coat on a hook in background. |
| US Southwest | Stucco exterior. Bright sun. Desert landscaping visible. |
| US General | Neutral residential exterior or interior. No extreme weather cues. |

## Resolution and Format

Minimum 2400x1200 pixels. 2:1 aspect ratio preferred.

Deliver as optimized WebP with JPEG fallback. No text baked into the image. All text is added via HTML overlay.

## AI Generation Prompt Template

When generating hero images with AI tools, use this structure:

```
A professional HVAC technician in a clean [color] uniform with a visible name badge,
working on [an outdoor AC condenser / an indoor furnace] at a [residential home].
[Side / three-quarter front] natural lighting, warm color temperature.
Shallow depth of field. The technician is [performing a specific task],
hands visible with tools. [Regional setting cues].
Professional photography style, 35mm lens, f/2.8.
No text. No logos. No watermarks.
```

Adjust the bracketed sections per the client's region and preference.
